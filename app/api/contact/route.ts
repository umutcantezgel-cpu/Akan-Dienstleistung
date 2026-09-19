import { NextResponse } from 'next/server';
import { z } from 'zod';
import { contactSchema } from '@/features/contact-form/api/schema';

// In-Memory Simple Rate Limiter for Serverless / Node Runtime
// Keeps track of IP request timestamps to prevent abuse
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
    const now = Date.now();
    const windowMs = 10 * 60 * 1000; // 10 minutes window
    const maxRequests = 5; // max 5 submissions per window

    const record = rateLimitMap.get(ip);
    if (!record || now > record.resetAt) {
        rateLimitMap.set(ip, { count: 1, resetAt: now + windowMs });
        return false;
    }

    if (record.count >= maxRequests) {
        return true;
    }

    record.count += 1;
    return false;
}

function escapeHtml(str: string): string {
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

export async function POST(req: Request) {
    try {
        // 1. IP Determination & Rate Limiting
        const forwardedFor = req.headers.get('x-forwarded-for');
        const firstIp = forwardedFor ? forwardedFor.split(',')[0] : null;
        const clientIp = firstIp ? firstIp.trim() : '127.0.0.1';

        if (isRateLimited(clientIp)) {
            return NextResponse.json(
                {
                    success: false,
                    message: 'Zu viele Anfragen in kurzer Zeit. Bitte warten Sie einige Minuten oder rufen Sie uns direkt an.'
                },
                { status: 429 }
            );
        }

        const body = await req.json();

        // 2. Schema Validation via Zod
        const validatedData = contactSchema.parse(body);

        // 3. Honeypot check for bots (silent success)
        if (validatedData.honeypot && validatedData.honeypot.trim() !== '') {
            console.warn(`[Bot Detected] Honeypot field filled from IP: ${clientIp}`);
            return NextResponse.json({
                success: true,
                message: 'Ihre Nachricht wurde erfolgreich gesendet.'
            });
        }

        // 4. Sanitize inputs for email HTML rendering
        const safeName = escapeHtml(validatedData.name);
        const safeEmail = escapeHtml(validatedData.email);
        const safePhone = validatedData.phone ? escapeHtml(validatedData.phone) : 'Nicht angegeben';
        const safeService = validatedData.service ? escapeHtml(validatedData.service) : 'Allgemeine Anfrage';
        const safeMessage = escapeHtml(validatedData.message).replace(/\n/g, '<br />');
        const submittedAt = new Date().toLocaleString('de-DE', { timeZone: 'Europe/Berlin' });

        const recipientEmail = process.env.CONTACT_EMAIL_RECIPIENT || 'info@akan-dienstleistung.de';
        const resendApiKey = process.env.RESEND_API_KEY;
        const webhookUrl = process.env.CONTACT_WEBHOOK_URL;

        const emailHtml = `
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="utf-8">
  <title>Neue Kundenanfrage | AKAN Dienstleistung</title>
</head>
<body style="font-family: Arial, sans-serif; background-color: #f8fafc; color: #1e293b; padding: 24px; margin: 0;">
  <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
    <div style="background-color: #9B1C2E; padding: 24px; color: #ffffff; text-align: center;">
      <h1 style="margin: 0; font-size: 20px; font-weight: bold;">Neue Kundenanfrage</h1>
      <p style="margin: 4px 0 0 0; font-size: 14px; opacity: 0.9;">AKAN Dienstleistung Website</p>
    </div>
    <div style="padding: 24px;">
      <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold; width: 140px; color: #64748b;">Name:</td>
          <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a;">${safeName}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #64748b;">E-Mail:</td>
          <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9;"><a href="mailto:${safeEmail}" style="color: #9B1C2E; text-decoration: none;">${safeEmail}</a></td>
        </tr>
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #64748b;">Telefon:</td>
          <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a;">${safePhone}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #64748b;">Gewünschte Leistung:</td>
          <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a; font-weight: bold;">${safeService}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #64748b;">Eingangszeitpunkt:</td>
          <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b;">${submittedAt} Uhr</td>
        </tr>
      </table>

      <div style="margin-top: 20px;">
        <h3 style="font-size: 14px; font-weight: bold; color: #64748b; margin-bottom: 8px;">Nachricht des Kunden:</h3>
        <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; font-size: 14px; line-height: 1.6; color: #1e293b;">
          ${safeMessage}
        </div>
      </div>

      <div style="margin-top: 24px; text-align: center;">
        <a href="mailto:${safeEmail}?subject=Re:%20Ihre%20Anfrage%20bei%20AKAN%20Dienstleistung" style="display: inline-block; background-color: #9B1C2E; color: #ffffff; padding: 12px 24px; border-radius: 8px; font-size: 14px; font-weight: bold; text-decoration: none;">
          Direkt antworten
        </a>
      </div>
    </div>
    <div style="background-color: #f8fafc; padding: 16px; text-align: center; font-size: 12px; color: #94a3b8; border-top: 1px solid #f1f5f9;">
      AKAN Dienstleistung | Breslauer Str. 50, 34281 Gudensberg | 0152 34754386
    </div>
  </div>
</body>
</html>
        `;

        // 5. Dispatch via Mail Provider
        if (resendApiKey) {
            const resendResponse = await fetch('https://api.resend.com/emails', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${resendApiKey}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    from: process.env.CONTACT_EMAIL_FROM || 'AKAN Dienstleistung <noreply@akan-dienstleistung.de>',
                    to: [recipientEmail],
                    reply_to: validatedData.email,
                    subject: `Neue Anfrage von ${validatedData.name} (${safeService})`,
                    html: emailHtml,
                }),
            });

            if (!resendResponse.ok) {
                const resendError = await resendResponse.text();
                console.error('[Resend Error]', resendError);
                // Return clear error if provider rejected
                return NextResponse.json(
                    {
                        success: false,
                        message: 'Der Mailserver konnte die Anfrage leider nicht verarbeiten. Bitte rufen Sie uns direkt an: 0152 34754386.'
                    },
                    { status: 502 }
                );
            }
        } else if (webhookUrl) {
            // Webhook fallback (e.g. Zapier, Make, Slack, Discord, internal CRM)
            await fetch(webhookUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    recipient: recipientEmail,
                    submittedAt,
                    data: validatedData,
                }),
            });
        } else {
            // Local / Demo / Missing ENV Mode
            console.log('ℹ️ [Contact Route] No RESEND_API_KEY or CONTACT_WEBHOOK_URL set. Data captured locally:', {
                to: recipientEmail,
                name: validatedData.name,
                email: validatedData.email,
                phone: validatedData.phone,
                service: validatedData.service,
                submittedAt,
            });
        }

        return NextResponse.json({
            success: true,
            message: 'Vielen Dank! Ihre Anfrage wurde erfolgreich an AKAN Dienstleistung übermittelt. Wir melden uns innerhalb von 24 Stunden bei Ihnen.'
        });

    } catch (error) {
        if (error instanceof z.ZodError) {
            return NextResponse.json(
                { success: false, errors: error.flatten().fieldErrors, message: 'Bitte überprüfen Sie Ihre Eingaben.' },
                { status: 400 }
            );
        }

        console.error('[API Contact Exception]', error);
        return NextResponse.json(
            { success: false, message: 'Ein unerwarteter Fehler ist aufgetreten. Bitte versuchen Sie es erneut oder kontaktieren Sie uns telefonisch.' },
            { status: 500 }
        );
    }
}

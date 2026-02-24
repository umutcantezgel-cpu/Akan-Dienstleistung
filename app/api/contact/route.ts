import { NextResponse } from 'next/server';
import { z } from 'zod';
import { contactSchema } from '@/features/contact-form/api/schema';

export async function POST(req: Request) {
    try {
        const body = await req.json();

        // Runtime Validation via Zod
        const validatedData = contactSchema.parse(body);

        // Processing phase (Database, Email Service, etc.)
        console.log('✅ ZOD VALIDATED DATA:', validatedData);

        return NextResponse.json({
            success: true,
            message: 'Nachricht erfolgreich gesendet',
            data: validatedData
        });

    } catch (error) {
        if (error instanceof z.ZodError) {
            return NextResponse.json(
                { success: false, errors: error.flatten().fieldErrors },
                { status: 400 }
            );
        }

        return NextResponse.json(
            { success: false, message: 'Ein unerwarteter Fehler ist aufgetreten' },
            { status: 500 }
        );
    }
}

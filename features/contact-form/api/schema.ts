import { z } from 'zod';

export const contactSchema = z.object({
    name: z.string().min(2, 'Bitte verraten Sie uns Ihren Namen.').max(100, 'Name ist zu lang (max. 100 Zeichen).'),
    email: z.string().email('Bitte prüfen Sie Ihre E-Mail-Adresse auf Tippfehler.').max(150, 'E-Mail ist zu lang.'),
    phone: z.string().max(50, 'Telefonnummer ist zu lang.').optional(),
    service: z.string().max(50).optional(),
    message: z.string().min(10, 'Ihre Nachricht ist noch etwas kurz. Bitte teilen Sie uns mehr Details mit.').max(3000, 'Nachricht ist zu lang (max. 3000 Zeichen).'),
    honeypot: z.string().max(50).optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;

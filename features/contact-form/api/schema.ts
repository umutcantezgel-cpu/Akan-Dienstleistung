import { z } from 'zod';

export const contactSchema = z.object({
    name: z.string().min(2, 'Bitte verraten Sie uns Ihren Namen.'),
    email: z.string().email('Bitte prüfen Sie Ihre E-Mail-Adresse auf Tippfehler.'),
    phone: z.string().optional(),
    service: z.string().optional(),
    message: z.string().min(10, 'Ihre Nachricht ist noch etwas kurz. Bitte teilen Sie uns mehr Details mit.'),
});

export type ContactFormData = z.infer<typeof contactSchema>;

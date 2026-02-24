import { z } from 'zod';

export const contactSchema = z.object({
    name: z.string().min(2, 'Name ist erforderlich'),
    email: z.string().email('Ungültige E-Mail-Adresse'),
    phone: z.string().optional(),
    service: z.string().optional(),
    message: z.string().min(10, 'Nachricht muss mindestens 10 Zeichen lang sein'),
});

export type ContactFormData = z.infer<typeof contactSchema>;

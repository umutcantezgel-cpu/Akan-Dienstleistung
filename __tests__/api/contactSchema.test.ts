import { describe, it, expect } from 'vitest';
import { contactSchema } from '@/features/contact-form/api/schema';

describe('ContactForm - Zod Schema Validation', () => {
    it('should validate correctly with all required fields', () => {
        const payload = {
            firstName: 'Max',
            lastName: 'Mustermann',
            email: 'max@example.com',
            message: 'Dies ist eine ausführliche Nachricht.'
        };
        const result = contactSchema.safeParse(payload);
        expect(result.success).toBe(true);
    });

    it('should reject invalid email format', () => {
        const payload = {
            firstName: 'Max',
            lastName: 'Mustermann',
            email: 'invalid-email',
            message: 'Dies ist eine ausführliche Nachricht.'
        };
        const result = contactSchema.safeParse(payload);
        expect(result.success).toBe(false);
        if (!result.success) {
            expect(result.error.issues[0]?.message).toBe('Ungültige E-Mail-Adresse');
        }
    });

    it('should enforce message minimum length constraint', () => {
        const payload = {
            firstName: 'Max',
            lastName: 'Muster',
            email: 'valid@example.com',
            message: 'Zu kurz'
        };
        const result = contactSchema.safeParse(payload);
        expect(result.success).toBe(false);
        if (!result.success) {
            expect(result.error.issues[0]?.message).toBe('Nachricht muss mindestens 10 Zeichen lang sein');
        }
    });
});

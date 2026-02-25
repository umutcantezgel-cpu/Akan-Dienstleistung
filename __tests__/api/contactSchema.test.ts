import { describe, it, expect } from 'vitest';
import { contactSchema } from '@/features/contact-form/api/schema';

describe('ContactForm - Zod Schema Validation', () => {
    it('should validate correctly with all required fields', () => {
        const payload = {
            name: 'Max Mustermann',
            email: 'max@example.com',
            message: 'Dies ist eine ausführliche Nachricht.'
        };
        const result = contactSchema.safeParse(payload);
        expect(result.success).toBe(true);
    });

    it('should reject invalid email format', () => {
        const payload = {
            name: 'Max Mustermann',
            email: 'invalid-email',
            message: 'Dies ist eine ausführliche Nachricht.'
        };
        const result = contactSchema.safeParse(payload);
        expect(result.success).toBe(false);
        if (!result.success) {
            expect(result.error.issues[0]?.message).toBe('Bitte prüfen Sie Ihre E-Mail-Adresse auf Tippfehler.');
        }
    });

    it('should enforce message minimum length constraint', () => {
        const payload = {
            name: 'Max Mustermann',
            email: 'valid@example.com',
            message: 'Zu kurz'
        };
        const result = contactSchema.safeParse(payload);
        expect(result.success).toBe(false);
        if (!result.success) {
            expect(result.error.issues[0]?.message).toBe('Ihre Nachricht ist noch etwas kurz. Bitte teilen Sie uns mehr Details mit.');
        }
    });

    it('should enforce name minimum length constraint', () => {
        const payload = {
            name: 'M',
            email: 'valid@example.com',
            message: 'Diese Nachricht ist ausreichend lang.'
        };
        const result = contactSchema.safeParse(payload);
        expect(result.success).toBe(false);
        if (!result.success) {
            expect(result.error.issues[0]?.message).toBe('Bitte verraten Sie uns Ihren Namen.');
        }
    });
});

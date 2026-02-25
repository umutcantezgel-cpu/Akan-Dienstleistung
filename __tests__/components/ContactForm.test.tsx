import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeAll } from 'vitest';
import ContactForm from '@/features/contact-form/components/ContactForm';
import userEvent from '@testing-library/user-event';

// Mock matchMedia and observers for JSDOM
beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
        writable: true,
        value: vi.fn().mockImplementation(query => ({
            matches: false,
            media: query,
            onchange: null,
            addListener: vi.fn(), // deprecated
            removeListener: vi.fn(), // deprecated
            addEventListener: vi.fn(),
            removeEventListener: vi.fn(),
            dispatchEvent: vi.fn(),
        })),
    });

    global.ResizeObserver = vi.fn().mockImplementation(() => ({
        observe: vi.fn(),
        unobserve: vi.fn(),
        disconnect: vi.fn(),
    }));

    global.IntersectionObserver = vi.fn().mockImplementation(() => ({
        observe: vi.fn(),
        unobserve: vi.fn(),
        disconnect: vi.fn(),
    }));
});

describe('ContactForm Integration Tests', () => {
    it('renders the contact form fields correctly', () => {
        render(<ContactForm />);

        // Verify standard inputs exist
        expect(screen.getByLabelText(/Wie dürfen wir Sie ansprechen\?/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Ihre beste E-Mail Adresse/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Worum geht es genau\? \(Ihre Nachricht\)/i)).toBeInTheDocument();

        // Verify submit button exists
        expect(screen.getByRole('button', { name: /Kostenlose Erstberatung anfordern/i })).toBeInTheDocument();
    });

    it('requires the privacy policy checkbox to submit', async () => {
        const user = userEvent.setup();
        render(<ContactForm />);

        const submitBtn = screen.getByRole('button', { name: /Kostenlose Erstberatung anfordern/i });

        await user.type(screen.getByLabelText(/Wie dürfen wir Sie ansprechen\?/i), 'Max Mustermann');
        await user.type(screen.getByLabelText(/Ihre beste E-Mail Adresse/i), 'max@muster.de');
        await user.type(screen.getByLabelText(/Worum geht es genau\? \(Ihre Nachricht\)/i), 'Diese Nachricht ist lang genug damit Zod zufrieden ist.');

        // Do not click privacy
        await user.click(submitBtn);

        // submit shouldn't be disabled immediately if it just returned because privacy isn't checked
        expect(submitBtn).not.toBeDisabled();
    });
});

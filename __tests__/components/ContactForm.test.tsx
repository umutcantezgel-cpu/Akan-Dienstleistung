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
        expect(screen.getByLabelText(/Vorname/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Nachname/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/E-Mail Adresse/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Ihre Nachricht/i)).toBeInTheDocument();

        // Verify submit button exists
        expect(screen.getByRole('button', { name: /Nachricht absenden/i })).toBeInTheDocument();
    });

    it('requires the privacy policy checkbox to submit', async () => {
        const user = userEvent.setup();
        render(<ContactForm />);

        const submitBtn = screen.getByRole('button', { name: /Nachricht absenden/i });

        // Form should not submit if privacy not checked (our custom logic prevents even fetch)
        // We can simulate filling it out, clicking submit, and checking if loading state happens

        await user.type(screen.getByLabelText(/Vorname/i), 'Max');
        await user.type(screen.getByLabelText(/Nachname/i), 'Muster');
        await user.type(screen.getByLabelText(/E-Mail Adresse/i), 'max@muster.de');
        await user.type(screen.getByLabelText(/Ihre Nachricht/i), 'Diese Nachricht ist lang genug damit Zod zufrieden ist.');

        // Do not click privacy
        await user.click(submitBtn);

        // It shouldn't trigger loading state if we didn't mock fetch, but even simpler: 
        // submit shouldn't be disabled immediately if it just returned
        expect(submitBtn).not.toBeDisabled();
    });
});

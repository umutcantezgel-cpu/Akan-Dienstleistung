import { test, expect } from '@playwright/test';

test.describe('Contact Form E2E', () => {
    test.beforeEach(async ({ page }) => {
        // Intercept console messages to debug any client-side errors
        page.on('console', msg => console.log(`[Browser Console] ${msg.type()}: ${msg.text()}`));
        page.on('pageerror', err => console.log(`[Browser Error] ${err.name}: ${err.message}`));

        // Navigate to the contact page before each test
        await page.goto('/contact');
    });

    test('should display validation errors for empty submissions', async ({ page }) => {
        // Attempt to submit without filling any fields and without checking privacy
        const submitButton = page.getByTestId('submit-button');
        await submitButton.click();

        // The form should not submit and instead show red validation borders / messages
        // React Hook Form handles this natively. Service field should have a validation error:
        await expect(page.getByTestId('privacy-error')).toBeVisible();

        // Check privacy box
        await page.getByTestId('privacy-checkbox').click();
        await submitButton.click();

        // Wait for the Zod schema validation errors to be injected into the DOM
        await expect(page.getByText(/Vorname ist erforderlich/i)).toBeVisible();
        await expect(page.getByText(/Nachricht muss mindestens 10 Zeichen lang sein/i)).toBeVisible();
    });

    test('should submit successfully with valid data', async ({ page }) => {
        // Fill out the form via explicit IDs
        await page.locator('#firstName').fill('Max');
        await page.locator('#lastName').fill('Mustermann');
        await page.locator('#email').fill('max@example.com');
        await page.locator('#phone').fill('0123456789');

        // Select service
        await page.locator('select#service').selectOption('unterhaltsreinigung');

        // Fill message
        await page.locator('#message').fill('Dies ist eine legitime, automatische Test - Nachricht von Playwright mit über 10 Zeichen.');

        // Check privacy box (need to click the container div as it's a custom liquid checkbox)
        await page.getByTestId('privacy-checkbox').click();

        // Mock the backend API response to avoid sending real emails during test runs
        await page.route('**/api/contact', async route => {
            const json = { success: true, message: 'Nachricht erfolgreich gesendet', data: {} };
            await route.fulfill({ json, status: 200, contentType: 'application/json' });
        });

        // Submit
        const submitButton = page.getByTestId('submit-button');
        await submitButton.click();

        // Assert success screen is shown
        await expect(page.getByTestId('success-message')).toBeVisible();
        await expect(page.getByText(/Ihre Daten haben unsere Systeme erfolgreich erreicht/i)).toBeVisible();
    });
});

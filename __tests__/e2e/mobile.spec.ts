import { test, expect } from '@playwright/test';
import { devices } from '@playwright/test';

test.describe('Mobile-First Interaction & Layout Tests (POLLUX)', () => {
    // Emulieren eines iPhone 13 (Notch, Safe-Areas, Touch)
    test.use({ ...devices['iPhone 13'] });

    test('Mobile Menu - Fullscreen Takeover and Touch Targets', async ({ page }) => {
        await page.goto('/');

        // Open Mobile Nav
        const menuButton = page.locator('button[aria-label="Menü öffnen"]');
        await expect(menuButton).toBeVisible();
        await menuButton.click();

        // Check Fullscreen Overlay
        const navOverlay = page.locator('div[role="dialog"][aria-modal="true"]');
        await expect(navOverlay).toBeVisible();

        // Check Touch Targets -> Nav-Links should have at least 48px height
        const firstNavLink = page.locator('nav[aria-label="Mobile Navigation"] a').first();
        const box = await firstNavLink.boundingBox();
        if (box) {
            expect(box.height).toBeGreaterThanOrEqual(48);
        }

        // Close via Swipe or Close button
        const closeButton = page.locator('button[aria-label="Menü schließen"]');
        await closeButton.click();
        await expect(navOverlay).toBeHidden();
    });

    test('Mobile Form - Focus States and Input Sizes', async ({ page }) => {
        await page.goto('/contact');

        // Check Phone Input (Touch Target Height 52px)
        const phoneInput = page.locator('input[type="tel"]').first();
        await expect(phoneInput).toBeVisible();

        const style = await phoneInput.evaluate((el) => window.getComputedStyle(el).height);
        // Expect explicitly 52px from our styles
        expect(style).toBe('52px');

        // Check Focus state for iOS auto-zoom prevention
        const fontSizeStr = await phoneInput.evaluate((el) => window.getComputedStyle(el).fontSize);
        const fontSize = parseFloat(fontSizeStr);
        expect(fontSize).toBeGreaterThanOrEqual(16); // Must be at least 16px to prevent zoom in Safari

        await phoneInput.focus();
        await expect(phoneInput).toBeFocused();
    });

    test('Quick Inquiry Sheet - Trigger and Close', async ({ page }) => {
        await page.goto('/');

        // Trigger Bottom-Sheet (if present on screen)
        const stickyCta = page.locator('button:has-text("Angebot anfordern")').first();
        if (await stickyCta.isVisible()) {
            await stickyCta.click();

            // Sheet Overlay
            const sheet = page.locator('.fixed.inset-x-0.bottom-0.z-\\[100\\]');
            await expect(sheet).toBeVisible();

            // Simulate drag to close (Drag indicator)
            const handle = page.locator('.w-12.h-1\\.5.bg-border');
            if (await handle.isVisible()) {
                const handleBox = await handle.boundingBox();
                if (handleBox) {
                    await page.mouse.move(handleBox.x + handleBox.width / 2, handleBox.y + handleBox.height / 2);
                    await page.mouse.down();
                    await page.mouse.move(handleBox.x + handleBox.width / 2, handleBox.y + 300, { steps: 5 });
                    await page.mouse.up();
                    await expect(sheet).toBeHidden();
                }
            }
        }
    });
});

const { chromium } = require('playwright');
const fs = require('fs');

const routes = [
    { path: '/', name: 'home' },
    { path: '/contact', name: 'contact' },
    { path: '/datenschutz', name: 'datenschutz' },
    { path: '/impressum', name: 'impressum' },
    { path: '/ueber-uns', name: 'ueber-uns' },
];

(async () => {
    const browser = await chromium.launch();

    for (const route of routes) {
        const page = await browser.newPage();
        console.log(`Navigating to http://localhost:3004${route.path}...`);

        try {
            await page.goto(`http://localhost:3004${route.path}`, { waitUntil: 'networkidle', timeout: 30000 });

            // Wait for animations
            await page.waitForTimeout(1000);

            await page.screenshot({ path: `screenshot-${route.name}-desktop.png`, fullPage: false });

            await page.setViewportSize({ width: 390, height: 844 });
            await page.waitForTimeout(500);
            await page.screenshot({ path: `screenshot-${route.name}-mobile.png`, fullPage: false });
        } catch (e) {
            console.error(`Error on ${route.name}:`, e.message);
        }
        await page.close();
    }

    await browser.close();
    console.log('All screenshots taken!');
})();

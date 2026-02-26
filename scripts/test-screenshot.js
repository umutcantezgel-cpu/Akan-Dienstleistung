const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Listen for console events
  page.on("console", (msg) => console.log(`BROWSER CONSOLE: ${msg.text()}`));
  page.on("pageerror", (err) => console.log(`BROWSER ERROR: ${err.message}`));

  console.log("Navigating to http://localhost:3000/contact...");
  await page.goto("http://localhost:3000/contact", {
    waitUntil: "networkidle",
  });

  // Scroll down multiple times to trigger the sticky action bar and back to top
  await page.evaluate(() => window.scrollTo(0, 1000));
  await page.waitForTimeout(500);
  await page.evaluate(() => window.scrollTo(0, 2000));
  await page.waitForTimeout(1000); // Wait for animations

  console.log("Taking desktop screenshot...");
  await page.screenshot({ path: "screenshot-desktop.png", fullPage: false });

  // Mobile Viewport
  console.log("Switching to mobile viewport...");
  await page.setViewportSize({ width: 390, height: 844 });
  await page.evaluate(() => window.scrollTo(0, 1000));
  await page.waitForTimeout(1000);

  console.log("Taking mobile screenshot...");
  await page.screenshot({ path: "screenshot-mobile.png", fullPage: false });

  await browser.close();
  console.log("Done!");
})();

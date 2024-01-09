// snapshot.js
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Set the viewport size to cover the entire page height
  await page.setViewport({
    width: 1200, // Adjust the width as needed
    height: await page.evaluate(() => document.body.clientHeight),
  });

  await page.goto('https://play.google.com/store/apps/details?id=app.florio.itp&hl=en&gl=US&pli=1');

  // Take a screenshot of the entire page
  await page.screenshot({ path: 'snapshot.png', fullPage: true });

  await browser.close();
})();

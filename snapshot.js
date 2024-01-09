// snapshot.js
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://play.google.com/store/apps/details?id=app.florio.itp&hl=en&gl=US&pli=1');
  await page.screenshot({ path: 'snapshot.png' });
  await browser.close();
})();

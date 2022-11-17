const puppeteer = require("puppeteer");

// async function scrapeProduct(url) {}

const scrapeProduct = async (url) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
};

const url =
  "https://www.amazon.com/Mamba-Mentality-How-Play/dp/0374201234/ref=sr_1_10?crid=33DSF11H67H86&keywords=sports+book&qid=1668723626&sprefix=sports+book%2Caps%2C85&sr=8-10";

scrapeProduct(url);

const puppeteer = require("puppeteer");

// async function scrapeProduct(url) {}

const scrapeProduct = async (url) => {
  const browser = await puppeteer.launch(); // start browser
  const page = await browser.newPage(); // start page
  await page.goto(url); // get page of input url

  // Get element of webpage you wish to scrape in chrome console
  // Right click the element > Copy > XPath

  const [element] = await page.$x(
    "/html/body/div[1]/div[2]/div[4]/div[1]/div[6]/div[1]/div[1]/div[2]/span/div/img"
  ); // $x() -> puppeteer selector returns array
  const srcText = await element.getProperty("src");
  const src = await srcText.jsonValue();

  // To scrape anything takes 3 commands:
  // 1. select the xpath of the element you wish to scrape
  // 2. call getProperty() on the result of the elemtn to get the "textContent"
  // 3. extract the json value

  const [element2] = await page.$x("//*[@id='productTitle']"); // $x() -> puppeteer selector returns array
  const titleText = await element2.getProperty("textContent");
  const title = await titleText.jsonValue();

  const [element3] = await page.$x(
    "/html/body/div[1]/div[2]/div[4]/div[1]/div[7]/div[16]/div[2]/div[2]/ul/li[2]/span/span[1]/span/a/span[2]/span"
  ); // $x() -> puppeteer selector returns array
  const priceText = await element3.getProperty("textContent");
  const price = await priceText.jsonValue();

  console.log({ src, title, price });

  browser.close(); // close puppeteer browser connection
};

const url =
  "https://www.amazon.com/Mamba-Mentality-How-Play/dp/0374201234/ref=sr_1_10?crid=33DSF11H67H86&keywords=sports+book&qid=1668723626&sprefix=sports+book%2Caps%2C85&sr=8-10";

scrapeProduct(url);

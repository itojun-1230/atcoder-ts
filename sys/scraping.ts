import * as dotenv from "dotenv";
dotenv.config();

import puppeteer from "puppeteer";
import fs from "fs";

if(process.argv.length < 3) {
  throw "Error: AtCoderの問題URLを引数として与えてください。"
}
const src =  `https://atcoder.jp/login?continue=${process.argv[2]}`;

(async() => {
  const browser = await puppeteer.launch({headless: "new"});
    const page = await browser.newPage()

    await page.goto(src);
    await page.type('input[name="username"]', process.env.ID!);
    await page.type('input[name="password"]', process.env.PASSWORD!);
  
    await Promise.all([
      page.waitForNavigation({waitUntil: ['load', 'networkidle2']}),
      await page.click('button[id="submit"]')
    ]);

    const sampleData = await page.evaluate(() => {
      const LangNum = document.querySelector(".lang")!.children.length;
      const data: string[] = [];
      const nodeList = document.querySelectorAll("pre");
      nodeList.forEach(_node => {
        data.push(_node.textContent!.trim());
      })
      return data.slice(1, data.length / LangNum);
    });

    for(let i = 0; i < sampleData.length; i+=2) {
      let str = `${sampleData[i]}\n${sampleData[i + 1]}`;
      fs.writeFileSync(`src/sample${i / 2 + 1}.txt`, str);
    }
    
    console.log("Success Setup!");
    browser.close();
})();
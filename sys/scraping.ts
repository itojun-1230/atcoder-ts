import puppeteer from "puppeteer";
import fs from "fs";

if(process.argv.length < 3) {
  throw "Error: AtCoderの問題URLを引数として与えてください。"
}
const src =  process.argv[2];

(async() => {
  const browser = await puppeteer.launch({headless: "new"});
    const page = await browser.newPage()

    await page.goto(src);

    const sampleData = await page.evaluate(() => {
      const data: string[] = [];
      const nodeList = document.querySelectorAll("pre");
      nodeList.forEach(_node => {
        data.push(_node.textContent!.trim());
      })
      return data.slice(1, data.length / 2);
    });

    for(let i = 0; i < sampleData.length; i+=2) {
      let str = `${sampleData[i]}\n${sampleData[i + 1]}`;
      fs.writeFileSync(`src/sample${i / 2 + 1}.txt`, str);
    }
    
    console.log("Success Setup!");
    browser.close();
})();
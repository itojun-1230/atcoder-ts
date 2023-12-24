import * as fs from "fs";

const Process_Script_Template: string[] = fs.readFileSync('./sys/template.ts', "utf8").split('\n');

fs.writeFileSync('./src/script.ts', Process_Script_Template.join("\n"));
for(let i = 1; i <= 4; i++) {
  try {
    fs.unlinkSync(`./src/sample${i}.txt`);
  } catch (e) {}
}
console.log("Reset complete!");
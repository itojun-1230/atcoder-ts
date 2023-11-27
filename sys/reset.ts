import * as fs from "fs";

const Process_Script_Template: string[] = fs.readFileSync('./sys/template.ts', "utf8").split('\n');

fs.writeFileSync('./src/script.ts', Process_Script_Template.join("\n"));
fs.writeFileSync('./src/sample/1.txt', '');
fs.writeFileSync('./src/sample/2.txt', '');
fs.writeFileSync('./src/sample/3.txt', '');
fs.writeFileSync('./src/sample/4.txt', '');
console.log("Reset complete!");
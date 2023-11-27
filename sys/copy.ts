import * as fs from "fs";

let lines: string[] = fs.readFileSync(`./src/script.ts`, "utf8").replace("./src/input.txt", "/dev/stdin").split('\n');

fs.writeFileSync('./sys/output.txt', lines.join("\n"));
console.log("Build complete!");
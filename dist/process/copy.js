"use strict";
const Process_Script = require('fs').readFileSync(`./src/script.ts`, "utf8").replace("./src/input.txt", "/dev/stdin").split('\n');
require('fs').writeFileSync('./src/process/output.txt', Process_Script.join("\n"));
console.log("Build complete!");
//# sourceMappingURL=copy.js.map
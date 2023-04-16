"use strict";
const Process_Script = require('fs').readFileSync(`./src/script.ts`, "utf8").split('\n');
Process_Script[Process_Script.length - 1] = 'Main(require("fs").readFileSync(`/dev/stdin`, "utf8").split("\\n"));';
require('fs').writeFileSync('./src/process/output.txt', Process_Script.join("\n"));
console.log("Copy complete!");
//# sourceMappingURL=copy.js.map
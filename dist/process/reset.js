"use strict";
const Process_Script_Template = require('fs').readFileSync('./src/process/template.txt', "utf8").split('\n');
require('fs').writeFileSync('./src/script.ts', Process_Script_Template.join("\n"));
require('fs').writeFileSync('./src/input.txt', '');
console.log("Reset complete!");
//# sourceMappingURL=reset.js.map
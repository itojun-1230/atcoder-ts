"use strict";
const Process_Script_Template = [
    'const Main = (input: string[]) => {',
    '    ',
    '}',
    '',
    'Main(require("fs").readFileSync("./src/input.txt", "utf8").trim().split("\\n"));'
];
require('fs').writeFileSync('./src/script.ts', Process_Script_Template.join("\n"));
require('fs').writeFileSync('./src/input.txt', '');
console.log("Reset complete!");
//# sourceMappingURL=reset.js.map
let lines: string[] = require('fs').readFileSync(`./src/script.ts`, "utf8").replace("./src/input.txt", "/dev/stdin").split('\n');


//使用していない関数を削除する
let useFunc : {
  [index: string] : {
    count: number,
    startLine: number,
    endLine: number
  }
} = {};
for(let i = 0; i < lines.length; i++) {
  const Line: string = lines[i];

  for(let j of Object.keys(useFunc)) {
    if(Line.includes(j)) useFunc[j].count += 1;
  }

  if(( Line.includes("=>") || Line.includes("function") ) && !Line.includes("Main") ) {
    const FuncName = Line.split(" ")[1];
    if(useFunc[FuncName] == undefined) {
      if(Line.includes("{")) {
        let kcount = 1;
        for(let j = i + 1; j < lines.length ;j++ ) {
          if(lines[j].includes("{")) kcount += 1;
          if(lines[j].includes("}")) kcount -= 1;

          if(kcount == 0) {
            useFunc[FuncName] = {
              count: 0,
              startLine: i,
              endLine: j + 1
            }
            i = j + 1;
            break;
          }
        }
      }else {
        useFunc[FuncName] = {
          count: 0,
          startLine: i,
          endLine: i + 1
        }
      }
    }
  }
}
for(let i of Object.keys(useFunc).reverse()) {
  if(useFunc[i].count == 0) {
    lines.splice(useFunc[i].startLine, useFunc[i].endLine - useFunc[i].startLine);
  }
}

require('fs').writeFileSync('./sys/output.txt', lines.join("\n"));
console.log("Build complete!");
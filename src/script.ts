const isPrime = (num: number): boolean => { //素数判定
  for(let i = 2; i * i < num; i++ ) {
    if(num % i == 0) return false;
  }
  return true;
}
const DeepCopy = (e: any): any => {  //ディープコピー
  return JSON.parse(JSON.stringify( e ));
}
const SplitNumber = (e: string): number[] => {  //文字列を分割して数値配列に
  return e.split(" ").map(Number);
}
const SplitString = (e: string): string[] => {  //文字列を分割して文字配列に
  return e.trim().split(" ");
}

const Main = (input: string[]) => {
  
}

Main(require("fs").readFileSync("./src/input.txt", "utf8").trim().split("\n"));
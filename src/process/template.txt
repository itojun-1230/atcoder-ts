const isPrime = (num: number): boolean => {
  for(let i = 2; i * i <= num; i++ ) {
    if(num % i == 0) return false;
  }
  return true;
}
const DeepCopy = (e: any): any => {
  return JSON.parse(JSON.stringify( e ));
}
const SplitNumber = (e: string): number[] => {
  return e.split(" ").map(Number);
}
const SplitString = (e: string): string[] => {
  return e.trim().split(" ");
}

const Main = (input: string[]) => {
  
}

Main(require("fs").readFileSync("./src/input.txt", "utf8").trim().split("\n"));
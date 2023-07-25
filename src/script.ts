const isPrime = (num: number | bigint): boolean => {
  if(typeof num == "number") {
    for(let i = 2; i * i <= num; i++ ) {
     if(num % i == 0) return false;
    }
  }else {
    for(let i = 2n; i * i <= num; i++ ) {
      if(num % i == 0n) return false;
     }
  }
  return true;
}
const Gcd = (a: number, b: number): number => {
    let r = a % b;
    while(r != 0) {
      a = b;
      b = r;
      r = a % b;
    }
    return b;
}
const Icm = (a: number, b: number): number => {
  return a / Gcd(a, b) * b;
}
const SplitNumber = (e: string): number[] => {
  return e.split(" ").map(Number)
}
const SplitString = (e: string): string[] => {
  return e.trim().split(" ");
}

const Main = (input: string[]) => {
  
}

Main(require("fs").readFileSync("./src/input.txt", "utf8").trim().split("\n"));
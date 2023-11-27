import * as os from "os";

let input: string[] = [];
let reader = require("readline").createInterface({
  input: process.stdin,
});

let input_current = 0;
let outputLine: string[] = [];

const judgement = () => {
  let answer: string[] = input.slice(input_current);
  if(answer.join("\n") == outputLine.join("\n")) {
    console.log("\x1b[33m## Sample was \x1b[32mAC\x1b[33m!\x1b[39m");
  }else {
    console.log("\x1b[33m## Sample was \x1b[31mWA\x1b[33m!\x1b[39m");
  }
}
const finish = () => {
  if (outputLine.length > 0) {
    console.log(outputLine.join("\n"));
  }
}

reader.on("line", (line: string) => input.push(line));
reader.on("close", () => {
  main();
  if(os.type() == "Windows_NT") judgement();
  finish();
});

const next = (): string => input[input_current++].trim();
const nextNum = (): number => Number(input[input_current++]);
const nextBigInt = (): BigInt => BigInt(input[input_current++]);
const nexts = (length: number): string[] => [...new Array(length)].map(() => input[input_current++].trim());
const nextNums = (length: number): number[] => [...new Array(length)].map(() => Number(input[input_current++]));
const nextBigInts = (length: number): BigInt[] => [...new Array(length)].map(() => BigInt(input[input_current++]));
const SpN = (e: string): number[] => e.split(" ").map(Number);

const print = (out: number | BigInt | string) => outputLine.push(String(out));

const Deep = <T>(e: T): T => structuredClone(e);  //DeepCopy
const UnArr = (n: number): undefined[] => [...new Array(n)];  //unfefined Array
const int = (n: number | string): number => Math.floor(Number(n)); //int conversion
const isRaise2 = (n: number): boolean => ((n & (n - 1)) == 0);  //Raised Test
const swap = <T>(e1: T, e2: T): T[] => [e2, e1];  //[e1, e2] = swap(e1, e2);  swap

const main = () => {

}
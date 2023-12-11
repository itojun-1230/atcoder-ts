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

const print = <T>(out: T) => outputLine.push(String(out));

class heapq<T> {
  _data: {
    p: number,
    d: T
  }[] = [];
  private _size: number = 0;

  enqueue = (priority: number, data: T) => {
    this._data.push({
      p: priority,
      d: data
    });
    if (this._size > 0) {
      let parent = Math.floor((this._size - 1) / 2);
      let index = this._size;
      while (parent >= 0) {
        if (this._data[parent].p < this._data[index].p) {
          [this._data[parent], this._data[index]] = swap(this._data[parent], this._data[index]);
          index = parent;
          parent = Math.floor((index - 1) / 2);
        } else {
          break;
        }
      }
    }
    this._size++;
  }
  dequeue = () => {
    if (this._size == 0) {
      return undefined;
    }
    this._size--;

    let heap = this._data;
    const result = heap[0];
    heap[0] = heap.pop()!;

    let index = 0;
    let left = 1, right = 2;
    while (left < this._size) {
      if (right >= this._size) {
        if (heap[index].p < heap[left].p) {
          [heap[index], heap[left]] = swap(heap[index], heap[left]);
        }
        break;
      }
      if (heap[left].p < heap[right].p && heap[index].p < heap[right].p) {
        [heap[index], heap[right]] = swap(heap[index], heap[right]);
        index = right;
      } else if (heap[index].p < heap[left].p) {
        [heap[index], heap[left]] = swap(heap[index], heap[left]);
        index = left;
      } else {
        break;
      }
      left = Math.floor(index * 2) + 1;
      right = Math.floor(index * 2) + 2;
    }

    return result.d;
  }
  top = () => {
    return this._data[0];
  }
  size = () => {
    return this._size;
  }
}

const Deep = <T>(e: T): T => structuredClone(e);  //DeepCopy
const UnArr = (n: number): undefined[] => [...new Array(n)];  //unfefined Array
const int = (n: number | string): number => Math.floor(Number(n)); //int conversion
const isRaise2 = (n: number): boolean => ((n & (n - 1)) == 0);  //Raised Test
const swap = <T>(e1: T, e2: T): T[] => [e2, e1];  //[e1, e2] = swap(e1, e2);  swap

const main = () => {

}
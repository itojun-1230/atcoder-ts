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
  private _node: {
    priority: number,
    data: T | undefined
  }[] = [];
  private _size: number = 0;

  enqueue = (priority: number, data: T | undefined = undefined) => {
    this._node.push({
      priority,
      data
    });
    if (this._size > 0) {
      let parent = Math.floor((this._size - 1) / 2);
      let index = this._size;
      while (parent >= 0) {
        if (this._node[parent].priority < this._node[index].priority) {
          [this._node[parent], this._node[index]] = swap(this._node[parent], this._node[index]);
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
    let heap = this._node;
    if(this._size == 1) {
      const result = heap[0];
      this._node = [];
      this._size--;

      return result;
    }
    this._size--;

    const result = heap[0];
    heap[0] = heap.pop()!;

    let index = 0;
    let left = 1, right = 2;
    while (left < this._size) {
      if (right >= this._size) {
        if (heap[index].priority < heap[left].priority) {
          [heap[index], heap[left]] = swap(heap[index], heap[left]);
        }
        break;
      }
      if (heap[left].priority < heap[right].priority && heap[index].priority < heap[right].priority) {
        [heap[index], heap[right]] = swap(heap[index], heap[right]);
        index = right;
      } else if (heap[index].priority < heap[left].priority) {
        [heap[index], heap[left]] = swap(heap[index], heap[left]);
        index = left;
      } else {
        break;
      }
      left = Math.floor(index * 2) + 1;
      right = Math.floor(index * 2) + 2;
    }

    return result;
  }
  top = () => {
    return this._node[0];
  }
  size = () => {
    return this._size;
  }
  node = () => {
    return this._node;
  }
}

const Deep = <T>(e: T): T => structuredClone(e);  //DeepCopy
const UnArr = (n: number): undefined[] => [...new Array(n)];  //unfefined Array
const int = (n: number | string): number => Math.floor(Number(n)); //int conversion
const isRaise2 = (n: number): boolean => ((n & (n - 1)) == 0);  //Raised Test
const swap = <T>(e1: T, e2: T): T[] => [e2, e1];  //[e1, e2] = swap(e1, e2);  swap

const main = () => {

}
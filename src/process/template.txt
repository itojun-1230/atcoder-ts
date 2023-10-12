const SpN = (e: string): number[] => e.split(" ").map(Number);  //SplitNumber
const DpC = <T>(e: T) => structuredClone(e);  //DeepCopy

const Main = (input: string[]) => {
}

Main(require("fs").readFileSync("./src/input.txt", "utf8").trim().split("\n").map((e: string) => e.trim()));
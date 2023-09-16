const SplitNumber = (e: string): number[] => {
  return e.split(" ").map(Number)
}

const Main = (input: string[]) => {
  
}

Main(require("fs").readFileSync("./src/input.txt", "utf8").trim().split("\n"));
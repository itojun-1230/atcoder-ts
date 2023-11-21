
const SpN = (e: string): number[] => e.split(" ").map(Number);  //SplitNumber
const Deep = <T>(e: T): T => structuredClone(e);  //DeepCopy
const UnArr = (n: number): undefined[] => [...new Array(n)];  //unfefined Array
const int = (n: number | string): number => Math.floor(Number(n)); //int conversion
const isRaise2 = (n: number): boolean => ((n & (n - 1)) == 0);  //Raised Test
const swap = <T>(e1: T, e2: T): T[] => [e2, e1]  //[e1, e2] = swap(e1, e2);  swap
const e_dis = (str1: string, str2: string): number => { //levenshtein
  if(str1 == str2) return 0;
  if(str1.length == 0) return str2.length;
  if(str2.length == 0) return str1.length;

  const S1: string[] = str1.split(""), S2: string[] = str2.split("");
  let arr1: number[] = new Array(S1.length + 1), arr2: number[] = new Array(S2.length + 1);

  for(let s1_i = 0; s1_i < S1.length + 1; s1_i++)arr1[s1_i] = s1_i;

  let char1: string = '', char2: string = '';
  for(let s2_i = 1; s2_i <= S2.length; s2_i++) {
    arr2[0] = s2_i;
    char2 = S2[s2_i - 1];

    for(let s1_i = 0; s1_i < S1.length; s1_i++) {
      char1 = S1[s1_i];

      let cost: number = char1 == char2 ? 0 : 1, min: number = arr1[s1_i + 1] + 1;
      min = Math.min(min, arr2[s1_i] + 1);
      min = Math.min(min, arr1[s1_i] + cost);
      arr2[s1_i + 1] = min;
    }
    [arr1, arr2] = swap(arr1, arr2);
  }
  return arr1[S1.length];
}

const Main = (input: string[]) => {
  
}

Main(require("fs").readFileSync("./src/input.txt", "utf8").trim().split("\n").map((e: string) => e.trim()));
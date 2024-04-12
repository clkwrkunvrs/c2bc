const countBs = (inputString) => {
  let numBs = countCharWReduce(inputString, 'B');
  return numBs;
}

const countCharWReduce = (inputString, charToFind) => {
  return inputString.split('').reduce((numChar, character) => {
    return numChar += (character === charToFind) ? 1 : 0;
  }, 0);
}

console.log("Berries " + countBs("Berries"));
console.log("Peter " + countBs("Peter"));
console.log("B " + countBs("B"));
console.log("Baba " + countBs("Baba"));
console.log("BaBa " + countBs("BaBa"));
console.log("a " + countBs("a"));
console.log(" " + countBs(""));
console.log("? " + countBs("?"));
console.log("* " + countBs("*"));
console.log("bbbbb " + countBs("bbbbb"));
console.log("bbabb " + countBs("bbabb"));
console.log("BBBBB " + countBs("BBBBB"));
console.log("ZZZZZ " + countBs("ZZZZZ"));
console.log("zzzzz " + countBs("zzzzz"));
console.log("-1 " + countBs("-1"));
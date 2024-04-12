const chessBoard = (size) => {

  if (size < 1) {
    console.log("size must be greater than zero");
    return;
  }

  let oddLineString = "";
  let evenLineString = "";
  for (let i = 0; i < size; i++) {
    i % 2 === 0 ? oddLineString += " " : oddLineString += "#";
    i % 2 === 0 ? evenLineString += "#" : evenLineString += " ";
  }

  for (let i = 0; i < size / 2; i++) {
    i % 2 === 0 ? console.log(oddLineString) : console.log(evenLineString);
  }
}

console.log('two');
chessBoard(2)
console.log('four');
chessBoard(4)
console.log('three');
chessBoard(3)
console.log('eight');
chessBoard(8)
console.log('five');
chessBoard(5)
console.log('one');
chessBoard(1)
console.log('zero');
chessBoard(0)
console.log('negative one');
chessBoard(-1)
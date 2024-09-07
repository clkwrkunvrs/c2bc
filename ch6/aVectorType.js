class Vec {

  constructor(x,y) {
    this.x = x;
    this.y = y;
  }

  plus = (vec) => {
    let sumx = this.x + vec.x;
    let sumy = this.y + vec.y;
    return new Vec(sumx, sumy);
  }

  minus = (vec) => {
    let diffx = this.x - vec.x;
    let diffy = this.y - vec.y;
    return new Vec(diffx, diffy);
  }

  get length() {
    return Math.sqrt(Math.pow(this.x, 2) 
      + Math.pow(this.y, 2));
  }

  toString() {
    return this.x + ", " + this.y;
  }
}

const vec1 = new Vec(1,1);

[
[1,1],
[2,2],
[6,10],
[10, 6],
[22.5, 16.8],
[-1, 16.4],
[-1, -1],
[-1, 123456789123456789123456789]
].forEach(([x,y]) => {
  const vec2 = new Vec(x,y);
  const vecSum = vec1.plus(vec2);
  console.log("vecSum: " + vecSum.toString());
  const vecDiff = vec2.minus(vec1);
  console.log("vecDiff: " + vecDiff.toString());
  console.log("length of vecSum: " + vecSum.length);
  console.log("length of vecDiff: " + vecDiff.length);
});



import assert from 'assert';
const minimum = (a,b) => {
  //return b ^ ((a ^ b) & -(a < b)); //bitwise min
  return a <= b ? a : b;
}

assert(minimum(1,2) == 1);
assert(minimum(2,1) == 1);
assert(minimum(-1,1) == -1);
assert(minimum(2,2) == 2);
assert(minimum(0,0) == 0);
assert(minimum(-1,-1) == -1);
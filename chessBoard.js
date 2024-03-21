const size = 12;
let hashString1 = (" #").repeat(size/2);
let hashString2 = ("# ").repeat(size/2);

for (let i = 0; i < size; i++) {
    i % 2 === 0 ? console.log(hashString1) : console.log(hashString2);
}
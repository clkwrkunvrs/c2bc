class Group {
  constructor(values = [], position = 0){
    this.values = values;
    this.position = position;
  }

  add = (value) => {
    if (! this.has(value)) {
      this.values.push(value);
    } else {
      console.log("Group already has the value: " + value);
    }
  }

  delete = (value) => {
    if (this.has(value)) {
      let elIndex = this.find(value);

      for (let ii = elIndex; ii < this.values.length - 1 ; ii++) {
        this.values[ii] = this.values[ii+1];
      }
      this.values.pop();
    } else {
      console.log("values doesn't contain the value: " + value);
    }
  }

  find = (value) => {
    for (let ii = 0; ii < this.values.length; ii++) {
      if (this.values[ii] === value) {
        //console.log("found value at index: " + ii);
        return ii;
      }
    }
    return -1;
  }

  static from = (iterableObject) => {
    let group = new Group();
    for (const object of iterableObject) {
      group.add(object);
    }
    return group;
  }

  has = (value) => {
    return this.find(value) > -1;
  }
}

class GroupIterator {
  constructor(group) {
    this.pos = 0;
    this.group = group;
  }

    next() {
      if (this.pos >= this.group.values.length) {
        return {done: true};
      }
      let value = {current: this.group.values,
        value: this.group.values[this.pos]};
        this.pos++;
        return {value, done: false};
  }
}

Group.prototype[Symbol.iterator] = function() {
  return new GroupIterator(this);
}

const group = new Group();
group.add(1);
group.add(2);
group.add(3);
group.add(4);
group.add(5);

for (const elem of group) {
  console.log("next element:" + elem.value);
}

let newArr = [6,5,4,3,2,1];
const newGroup = Group.from(newArr);

for (const elem of newGroup) {
  console.log("next elem in new group: " + elem.value);
}

console.log("looking for value: " + 3);
let indexOfThree = newGroup.find(3);
if (indexOfThree > -1) {
console.log("value 3 was found at: " + indexOfThree);
} else {
  console.log("value 3 was not found in new group");
}
console.log("deleting value 3 from the group");
newGroup.delete(3);
console.log("looking for value: " + 3);
let indexOfThreeAfterDelete = newGroup.find(3);
if (indexOfThreeAfterDelete > -1) {
  console.log("value 3 was found at: " + indexOfThreeAfterDelete);
} else {
  console.log("value 3 was not found in new group");
}

for (const elem of newGroup) {
  console.log("next elem in new group: " + elem.value);
}

console.log("creating food group");
const foodGroup = Group.from(["Have", "a", "banana", "or"]);
for (const elem of foodGroup) {
  console.log("next elem in new group: " + elem.value);
}
console.log("adding two to food group");
foodGroup.add("two");

for (const elem of foodGroup) {
  console.log("next elem in new group: " + elem.value);
}

if (foodGroup.has("two")) {
  console.log("group has 'two'");
} else {
  console.log("group doesn't contain 'two'");
}

console.log("two is at " + foodGroup.find("two"));
foodGroup.delete("two");
foodGroup.add("three");
for (const elem of foodGroup) {
  console.log("next elem in new group: " + elem.value);
}
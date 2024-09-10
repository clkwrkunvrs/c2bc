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
      this.find(value);

      for (let ii = index; ii < this.values.length - 1 ; ii++) {
        this.values[ii] = this.values[ii+1];
      }
      this.values.pop();
    } else {
      console.log("values doesn't contain the value: " + value);
    }
  }

  find = (value) => {
    let index = 0;
    for (let ii = 0; ii < this.values.length; ii++) {
      if (val === value) {
        index = ii;
        break;
      }
    }
  }

  static from = (iterableObject) => {
    let group = new Group();
    for (const object of iterableObject) {
      group.add(object);
    }
    return group;
  }

  has = (value) => {
    for (const val of this.values) {
      if (val === value) {
        return true;
      }
    }
    return false;
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
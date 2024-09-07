class Group {
  constructor(values = []){
    this.values = values;
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
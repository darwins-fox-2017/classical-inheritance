class X {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  // set name(name) {
  //   this._name = name + "X";
  // }
}


class Y extends X {
  constructor(name) {
    super(name);
  }

  get name(){
    return super.name;
  }

  // set name(name) {
  //   super.name = name;
  //   this._name += "Y";
  // }
}

var y = new Y('testing')
console.log(y.name)

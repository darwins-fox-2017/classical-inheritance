"use strict"
class Animal {
  constructor(name, age) {
    this.name = name;
    this._age = 0;
  }

  get getAge(){return this.age}

  set setAge(valAge){
    if(valAge < 0){
      console.log(`Animal ${this.name} fiktif`);
    }
    this._age = valAge;
  }

  resultAnimal(valAnimal){
    console.log(`Animal name ${this.name}`);
  }
}

// Extends dari Animal
class Mammal extends Animal {
  constructor(name, age, numLegs) {
    super(name, age);
    this._numLegs = 2;
  }
  get getNumLegs(){return this._numLegs}

  set setNumLegs(valLegs){
    if (valLegs < this._numLegs && valLegs > 4) {
      console.log(`Animal ${this.name} fiktif`);
    }
    this.numLegs = valLegs;
  }
  resultMammal(valMmmal){
    super.resultAnimal();
    console.log(`${this.name} Inheritance dari Mammal`)
  }
}

//Extends dari Mammal
class fox extends Mammal {
  constructor(name,numLegs) {
    super(name, numLegs);
  }
  resultFox(){
    super.resultMammal()
    console.log(`Jenis saya ${this.name} saya punya ${this._numLegs} kaki`)
  }
}


class SuperPowered extends fox{
  constructor(name, numLegs) {
    super(name)
  }

  skill (){
    console.log(`saya punya kekuatan sinar laser yang dikeluarkan dari mata`);
  }
}

var result      = new fox("CrossFox");
var resultSkill = new SuperPowered()
result._numLegs = 4;
result.resultFox();
resultSkill.skill();

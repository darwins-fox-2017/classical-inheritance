"use strict"
// parent class
class Animal {
  constructor(name, type, food, power) {
      this.name = name
      this.type = type
      this.food = food
      this.power = new SuperPowered(name, power)
  }

  print() {
    console.log(`this animal name is: ${this.name}, have type ${this.type}, and eat ${this.food}
      evveryday, & have ${this.power}`);
  }
}

// child class
class Dog extends Animal {
  constructor(name, type, food, power) {
    super(name, type, food, power)
  }

  printDog() {
    super.print()
  }
}

class Cat extends Animal {
  constructor(name, type, food, power) {
    super(name, type, food, power )
  }

  printCat() {
    super.print()
  }
}

// class SuperPowered  {
//   constructor(name,power) {
//     this.power = power
//     this.name = name
//   }
//
//   BeInvisible(power) {
//     this.power = power
//     console.log(` ${this.name} have power to ${this.power}`);
//   }
// }

class SuperPowered  {
  constructor(name, power) {
    this.name = name
    this.power = power
  }

  BeInvisible() {
    console.log(` ${this.name} have power to ${this.power}`);
  }
}


var neng = new Cat('neng','kampung','rice + fish', 'hide')
neng.power.BeInvisible();

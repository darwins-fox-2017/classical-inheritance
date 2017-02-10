"use strict"
// parent class
class Animal {
  constructor(name, type, food) {
      this.name = name
      this.type = type
      this.food = food
  }

  print() {
    console.log(`this animal name is: ${this.name}, have type ${this.type}, and eat ${this.food} evveryday`);
  }
}

// child class
class Dog extends Animal {
  constructor(name, type, food) {
    super(name, type, food)
  }

  printDog() {
    super.print()
  }
}

class Cat extends Animal {
  constructor(name, type, food) {
    super(name, type, food)
  }

  printCat() {
    super.print()
  }
}

var neng = new Cat('neng','kampung','rice + fish')

class SuperPowerDog extends Dog {
  constructor(name, type, food, power) {
    super(name, type, food)
    this.power = power
  }

  BeInvisible(power) {
    this.power = power
    console.log(`${this.name} have power to ${this.power}`);
  }
}

var jacky = new SuperPowerDog('jacky','mini pom','rice + chicken', 'hide when feel tired')
jacky.BeInvisible('running');

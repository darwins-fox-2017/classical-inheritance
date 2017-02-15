"use strict"

class Animal {
  constructor(name,num_legs) {
    this.name = name
    this.num_legs = 4
  }

  print(age) {
    console.log(`${this.name} have ${this.num_legs} legs and his age is ${age}`);
  }
}

class Cat extends Animal {
  constructor(name, num_legs, age) {
    super (name, num_legs)
  }

  print(age) {
    super.print(age)
  }
}

class Dog extends Animal {
  constructor(name, num_legs, age) {
    super(name, num_legs)
  }

  print(age) {
    super.print(age)
  }
}

class SuperPowered extends Animal {
  constructor (name, num_legs,age, superPower) {
    super(name, num_legs, age)
    this.superPower = ''
  }

  miaw(cat) {
    this.superPower = 'miaw'
    console.log(`${cat} have super power, it's ${this.superPower}`);
  }

  bark(dog) {
    this.superPower = 'guk guk'
    console.log(`${dog} have super power, it's ${this.superPower}`);
  }
}

let pet1 = new Animal ('Cat')
let pet2 = new Animal ('Dog')

let superPowerAnimal = new SuperPowered ()

pet1.print(2)
pet2.print(4)

superPowerAnimal.miaw('Cat')
superPowerAnimal.bark('Dog')

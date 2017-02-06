"use strict"

class Animals {
  constructor (animalName, age) {
    this._animalName = animalName
    this._age = age
  }

  doIntroduce() {
    return "I am a " + this._animalName
  }

  get animalAge() {
    return this._age
  }
}

class SuperPowered {
  constructor() {
    this.power = ""
  }

  use_laser_vision() {
    return this.power = "Kekuatan super saya adalah mata laser"
  }

  be_invisible() {
    return this.power = "Kekuatan super saya adalah menghilang"
  }

  super_sonic_sound() {
    return this.power = "Kekuatan super saya adalah gelombang supersonik"
  }

  super_brain() {
    return this.power = "Kekuatan saya adalah intelejensi saya"
  }
}

// Inheritance
class Frog extends Animals {
  constructor (animalName, age) {
    super(animalName, age)
    this.num_legs = 0
    this.warm_blooded = false
  }

  get animalAge() {
    return super.animalAge
  }

  countLegs(value) {
    return this.num_legs = value
  }

  is_warm_blooded() {
    return this.warm_blooded
  }

  isSaySomething() {
    console.log(`${super.doIntroduce()}, My age is ${super.animalAge} years old`)
    // Composition
    let superpower = new SuperPowered()
    if (this.warm_blooded === true) {
      console.log(`I am a Warm Blooded, ${superpower.super_brain()}`)
    } else {
      console.log(`I am not a Warm Blooded, ${superpower.super_brain()}`)
    }
    console.log()
  }
}

// Inheritance
class Fox extends Animals {
  constructor (animalName, age) {
    super(animalName, age)
    this.num_legs = 0
    this.warm_blooded = false
  }

  get animalAge() {
    return super.animalAge
  }

  countLegs(value) {
    return this.num_legs = value
  }

  is_warm_blooded() {
    return this.warm_blooded = true
  }

  isSaySomething() {
    console.log(`${super.doIntroduce()}, My age is ${super.animalAge} years old`)
    // Composition
    this.is_warm_blooded()
    let superpower = new SuperPowered()
    if (this.warm_blooded === true) {
      console.log(`I am a Warm Blooded, ${superpower.be_invisible()}`)
    } else {
      console.log(`I am not a Warm Blooded, ${superpower.be_invisible()}`)
    }
    console.log('')
  }
}

// Inheritance
class Bat extends Animals {
  constructor (animalName, age) {
    super(animalName, age)
    this.num_legs = 0
    this.warm_blooded = false
  }

  get animalAge() {
    return super.animalAge
  }

  countLegs(value) {
    return this.num_legs = value
  }

  is_warm_blooded() {
    return this.warm_blooded = true
  }

  isSaySomething() {
    console.log(`${super.doIntroduce()}, My age is ${super.animalAge} years old`)
    // Composition
    this.is_warm_blooded()
    let superpower = new SuperPowered()
    if (this.warm_blooded === true) {
      console.log(`I am a Warm Blooded, ${superpower.super_sonic_sound()}`)
    } else {
      console.log(`I am not a Warm Blooded, ${superpower.super_sonic_sound()}`)
    }
    console.log('')
  }
}

// Inheritance
class Chicken extends Animals {
  constructor (animalName, age) {
    super(animalName, age)
    this.num_legs = 0
    this.warm_blooded = false
  }

  get animalAge() {
    return super.animalAge
  }

  countLegs(value) {
    return this.num_legs = value
  }

  is_warm_blooded() {
    return this.warm_blooded = true
  }

  isSaySomething() {
    console.log(`${super.doIntroduce()}, My age is ${super.animalAge} years old`)
    // Composition
    this.is_warm_blooded()
    let superpower = new SuperPowered()
    if (this.warm_blooded === true) {
      console.log(`I am a Warm Blooded, ${superpower.use_laser_vision()}`)
    } else {
      console.log(`I am not a Warm Blooded, ${superpower.use_laser_vision()}`)
    }
    console.log('')
  }
}

let sikodok = new Frog("Kodok Ngorek", 10)
sikodok.isSaySomething()

let sirubah = new Fox("Darwin Fox", 8)
sirubah.isSaySomething()

let sikelelawar = new Bat("Batty", 5)
sikelelawar.isSaySomething()

let siayam = new Chicken("KFC", 6)
siayam.isSaySomething()

"use strict"

class Animal {
  constructor(numberOfLegs, isWarmBlood) {
    // super()
    this.numberOfLegs = numberOfLegs || 4
    this.isWarmBlood = isWarmBlood || true
    this.superPowered = new SuperPowered()
  }

  set numLegs(legs){
    this.numberOfLegs = legs
  }

  set warmBlood(isWarmBlood){
    this.isWarmBlood = isWarmBlood
  }

  get numLegs(){
    return this.numberOfLegs
  }

  get warmBlood(){
    return this.isWarmBlood
  }
}

class Chimpanzee extends Animal {
  constructor() {
    super()
    this.numberOfLegs = 2
    this.species = 'chimpanzee'
  }
}

class Fox extends Animal {
  constructor() {
    super()
    this.numberOfLegs = 4
    this.species = 'fox'
  }
}

class Duck extends Animal {
  constructor() {
    super()
    this.numberOfLegs = 2
    this.species = 'duck'
  }
}

class SuperPowered {
  superRun(){
      return `Faster Run`
  }

  superKick(){
    return `Super kick!`
  }

  superFly(){
    return `Super Flying`
  }
}

let donaldDuck = new Duck()
let darwin = new Fox()

console.log(`donaldDuck is a ${donaldDuck.species} he has ${donaldDuck.numberOfLegs} legs`);
console.log(`darwin is a ${darwin.species} he has ${darwin.numberOfLegs} legs and can use ${darwin.superPowered.superKick()}`);

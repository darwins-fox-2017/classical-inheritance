"use strict"

/**
 * Release 0
 */

class Animal {
  constructor(name, species, num_legs) {
    this.name     = name
    this.species  = species
    this.num_legs = 2
  }

  getAnimal() {
    console.log(`Animal name: ${this.name}\nSpecies: ${this.species}\nTotal legs: ${this.num_legs}`)
    return this
  }
}

class Fox extends Animal {
  constructor(name, species, num_legs, superpower) {
    super(name, species, num_legs)
    this.superpower = new SuperPowered()
    this.num_legs = 4
  }
}

/**
 * Release 1
 */
 class SuperPowered {
   constructor() {
   }

   sneakingPower() {
     return 'Super Power: Sneaking'
   }
 }

let fox = new Fox('Fox', 'Darwin Fox')
console.log(`Name : ${fox.name}`);
console.log(`Species : ${fox.species}`);
console.log(`Num Legs : ${fox.num_legs}`);
console.log(`${fox.superpower.sneakingPower()}`);
/**
 Ini akan menghasilkan nilai num_legs yang sama pada num_legs pada animal jika num_legs pada mamals tidak dioverride yang maka akan menghasilkan 2.
 Tapi, jika dioverride pada class mamals yang mana bernilai 4, maka num_legs akan yang dipanggil dari objek fox akan menghasilkan nilai 4
 **/

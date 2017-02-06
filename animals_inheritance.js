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

class Mammals extends Animal {
  constructor(name, species, num_legs) {
    super(name, species, num_legs)
    this.num_legs = 4
  }
}

console.log(animal.num_legs) // ini akan menghasilkan num_legs pada class animal = 2
let animal = new Animal('Fox', 'Darwin Fox', 4)
let fox = new Mammals()

/**
 Ini akan menghasilkan nilai num_legs yang sama pada num_legs pada animal jika num_legs pada mamals tidak dioverride yang maka akan menghasilkan 2.
 Tapi, jika dioverride pada class mamals yang mana bernilai 4, maka num_legs akan yang dipanggil dari objek fox akan menghasilkan nilai 4
 **/
console.log(fox.num_legs)

/**
 * Release 1
 */

 class SuperPowered extends Mammals{
   constructor(name, species, num_legs, power) {
      super(name, species, num_legs, power)
   }

   power() {
     return 'Super Power: Sneaking'
   }
 }

 let foxPower = new SuperPowered('Darwin', 'Fox', 4)

 foxPower.getAnimal()
 console.log(foxPower.power())

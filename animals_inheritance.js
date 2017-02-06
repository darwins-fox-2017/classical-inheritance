"use strict"
class Animal {
  constructor(objAnimal) {
    this.age = objAnimal['age']
  }

}

// Anura Sailentia
class Frog extends Animal {
  constructor(objAnimal) {
    super(objAnimal)
    this.name = objAnimal['name']
    this.num_legs = objAnimal['num_legs'] || 2
    this.is_warm_blooded = objAnimal['warm_blood'] || 'NO'
  }
  panggil() {
    return `${this.name} mempunyai data : ${this.age} umur, ${this.num_legs} kaki, ${this.is_warm_blooded} berdaran panas`
  }
}

class Ayam extends Animal {
  constructor(objAnimal) {
    super(objAnimal)
    this.name = objAnimal['name']
    this.num_legs = objAnimal['num_legs']
    this.is_warm_blooded = objAnimal['warm_blood']
  }
  panggil() {
    return `${this.name} mempunyai data : ${this.age} umur, ${this.num_legs} kaki, ${this.is_warm_blooded} berdaran panas`
  }
}

// Manggil Kodok
let objKodok = {name : 'Kodok', age : 1, num_legs : 4, warm_blood : 'Iya'}
let sangKodok = new Frog(objKodok)
console.log(sangKodok.panggil())


// Manggil Ayam
let objAyam = {name : 'Ayam', age : 4, num_legs : 2, warm_blood : 'Tidak'}
let sangAyam = new Ayam(objAyam)
console.log(sangAyam.panggil())

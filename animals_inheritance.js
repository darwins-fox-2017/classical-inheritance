"use strict"
class Animal {
  constructor (name, kaki){
    this.name = name
    this.kaki = 4
  }
  get Animal(){
    console.log(`name animal = ${this.name} jumlah kaki = ${this.kaki}`);
    return this
  }
}

class Fox extends Animal{
  constructor (name, kaki, warna, power){
    super (name, kaki)
    this.warna = warna
    this.power = new Power()
  }
}


class Power {
  constructor() {
  }

  firstskill() {
    return 'Super Power: Kage bunshin no jutsu'
  }
}

let fox = new Fox('Fox', '' ,'Hitam')
console.log(`Name : ${fox.name}`);
console.log(`Kaki : ${fox.kaki}`);
console.log(`Warna : ${fox.warna}`);
console.log(`${fox.power.firstskill()}`);

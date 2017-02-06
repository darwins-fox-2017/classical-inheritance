"use strict"
class Animal {
  constructor (jenis){
    this.jenis = jenis
  }
}

class Amphibian extends Animal{
  constructor (jenis, is_warm_blooded){
    super (jenis)
    this.is_warm_blooded = is_warm_blooded
  }
}

class Frog extends  Amphibian{
  constructor(jenis, is_warm_blooded, warna){
    super (jenis, is_warm_blooded)
    this.warna = warna
  }
}

class SuperPowerFrog extends Frog{
  constructor(jenis, is_warm_blooded, warna, kekuatan){
  super (jenis, is_warm_blooded, warna)
  this.kekuatan = kekuatan
  }

  power(){
    this.kekuatan = "Kage bunshin no jutsu"
    return `jenis : ${this.jenis}, Berdarah Hangat : ${this.is_warm_blooded}, Warna: ${this.warna}, kekuatan: ${this.kekuatan}`
  }

}


var xxx = new SuperPowerFrog('Kodok Naruoto', 'Tidak','Hitam')
console.log(xxx.power())

var vvv = new SuperPowerFrog('Kodok Sasuke', 'Tidak','Putih')
console.log(vvv.power())

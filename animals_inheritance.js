"use strict"

class Animal{
  constructor(component){
    this.nameofAnimal = component['nameofAnimal']
    this.isWarmBlood  = component['isWarmBlood']
    this.numOfLegs    = component['numOflegs']
  }
}

class Vertebrate extends Animal{
  constructor(component){
    super(component)
    this.hasBackBone = true
  }
}

class Mammal extends Vertebrate{
  constructor(component){
    super(component)
    this.suckling = true
    this.hairy = true
  }
}

class Carnivore extends Mammal {
  constructor(component){
    super(component)
    this.meatLover = true
  }
}

class Cat extends Carnivore{
  constructor(component){
    super(component)
    this.smart = true
  }
}

class SuperPoweredCat extends Cat{
  constructor(component){
    super(component)
    this.superPower = "Cuteness overload"
  }
}

let MoonCat = {
  'nameofAnimal' : 'Cat',
  'isWarmBlood'  : 'Yes',
  'numOflegs'    : 4
}
var superCat = new SuperPoweredCat(MoonCat)

console.log(superCat)

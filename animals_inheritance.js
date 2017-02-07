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
    this.smartAss = true
  }
}

class SuperPoweredCat extends Cat{
  constructor(component){
    super(component)
    this.superPower = "Cuteness overload"
    this.abilty = component['ability']
  }
}

let superMoonCat = {
  'nameofAnimal' : 'Cat',
  'isWarmBlood'  : 'Yes',
  'numOflegs'    : 4,
  'ability'      : 'Control magnetic feilds'
}
var superCat = new SuperPoweredCat(superMoonCat)

console.log(superCat)

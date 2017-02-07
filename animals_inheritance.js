"use strict"
class Animal{
  constructor(numOfLength,isWarmBlod){
    this._numOfLegs = numOfLength||4;
    this._isWarmBlod = isWarmBlod||true;
  }
  set numLegs(Legs){
    this._numOfLegs = numOfLegs;
  }

  set warmBlod(warmBlod){
    this._isWarmBlod =  warmBlod;
  }
  get NumLegs(){
    return this._numOfLegs
  }
  get warmBlod(){
    return this._isWarmBlod
  }

}

class Chimpanzee extends Animal{
  constructor(){
    super();
    this._numOfLegs=2 ;
    this._species='Chimpanzee'
    this.power=new superPower();
  }
}

class Duck extends Animal{
  constructor(){
    super();
    this._numOfLegs=2;
    this._species='duck'
  }
}


class Frog extends Animal{
  constructor(){
    super();
    this._numOfLegs = 4 ;
    this._species = 'frog';
  }
}

class superPower {

  superKick(){
    //super()
    return 'used super kick';
  }
  Fly(){
    //super()
    return 'the super chimp fly';
  }
}

let donald = new Duck();
let prince = new Frog();
let Chimp =  new Chimpanzee();

console.log(`donald is a ${donald._species} he has ${donald._numOfLegs} `);
console.log(`prince is a ${prince._species} he has ${prince._numOfLegs} `);
console.log(`chimp has ${Chimp._numOfLegs} legs and ${Chimp.power.Fly()}` );

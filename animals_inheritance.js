"use strict"

class Animal {
  constructor(is_warm_blooded) {
    this.is_warm_blooded = is_warm_blooded;
  }

  is_warm_blooded() {
    return is_warm_blooded;
  }
}

class Primate extends Animal {
  constructor(is_warm_blooded, num_legs) {
    super(is_warm_blooded);
    this.num_legs = num_legs;
  }

  getNumLegs() {
    return this.num_legs;
  }
}

class Amphibian extends Animal {
  constructor(is_warm_blooded, num_legs) {
    super(is_warm_blooded);
    this.num_legs = num_legs;
  }

  getNumLegs() {
    return this.num_legs;
  }
}

class Chimpanze extends Primate {
  constructor(is_warm_blooded, num_legs, name) {
    super(is_warm_blooded, num_legs);
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

class Frog extends Amphibian {
  constructor(is_warm_blooded, num_legs, name) {
    super(is_warm_blooded, num_legs);
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

class SuperPowerChimpanze extends Chimpanze {
  constructor(is_warm_blooded, num_legs, name) {
    super(is_warm_blooded, num_legs);
  }

  smashLikeHulk() {
    return "Destroyed Building : " + Math.floor(Math.random()*6) + 1;
  }
}

let simpanse = new SuperPowerChimpanze(true, 2, 'simpanse');
console.log(simpanse.smashLikeHulk())

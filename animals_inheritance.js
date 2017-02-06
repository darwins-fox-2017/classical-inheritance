"use strict"

class Animal {
	constructor(name, num_legs, is_warm_blooded) {
		this.name = name
		this.num_legs = 4
		this.is_warm_blooded = is_warm_blooded
	}

	is_warm_blooded() {
		console.log(`Nama Hewan : ${this.name}, Ganas : ${this.is_warm_blooded}, Jlh Kaki : ${this.num_legs}`)
		return this
	}
}

class Fox extends Animal {
	
	constructor(name, is_warm_blooded, num_legs, superPowered) {
	super(name, is_warm_blooded, num_legs)
		this.name = name
		this.is_warm_blooded = is_warm_blooded
		this.num_legs = num_legs
		this.superPowered = new SuperPowered()
	}

	power() {
		return `Jenis Fox : ${this.name} Ganas : ${this.is_warm_blooded}, Banyak Kaki : ${this.num_legs}`
	}
}


class SuperPowered {
	constructor() {

	}

	user_laser_vision() {
		return 'Jenis Hewan :  Dilindungi'
	}
}


let fox = new Fox('Darwin Fox', true, 4)
console.log(`Name : ${fox.name}`)
console.log(`Ganas : ${fox.is_warm_blooded}`)
console.log(`Jumlah Kaki : ${fox.num_legs}`)
console.log(`${fox.superPowered.user_laser_vision()}`)

// Jika pemanggilan this pada browser maka global object-nya window pada browser tersebut.

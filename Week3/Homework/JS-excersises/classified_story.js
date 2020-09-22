// # STORY

// Abdulkareem is a 35 year old man, that lives in Riyadh. He has a wife and 3 children. As a day job he's a construction worker, that makes houses. He likes to eat dates and smoke water pipe.

// Abdulkareem has a horse, named Adel. The horse is 15 years old and has the color brown. Usually the horse eats grass or helps transport materials for Abdulkareem.

// And they lived happily ever after!

class Animal {
  constructor(name, age, gender, color, location) {
    this._name = name;
    this._age = age;
    this._gender = gender;
    this._color = color;
    this._location = location;
  }
  get name() {
    return this._name;
  }
  get age() {
    return this._age;
  }
  get gender() {
    return this._gender;
  }
  get color() {
    return this._color;
  }
  get location() {
    return this._location;
  }
  eat(favoritFood) {
    console.log(`${this.name} eats ${favoritFood}`);
  }
  live() {
    console.log(`${this.name} lives happily!`);
  }
}

class Human extends Animal {
  constructor(
    name,
    age,
    gender,
    color,
    location,
    maritalStatus,
    numberOfChildren,
    occupation,
  ) {
    super(name, age, gender, color, location);
    this._maritalStatus = maritalStatus;
    this._numberOfChildren = numberOfChildren;
    this._occupation = occupation;
  }
  get maritalStatus() {
    return this._maritalStatus;
  }
  get numberOfChildren() {
    return this._numberOfChildren;
  }
  get occupation() {
    return this._occupation;
  }
  buildHouses() {
    console.log(`${this.name} builds houses `);
  }
  smoke(typeOfSmoke) {
    console.log(`${this.name} likes to smoke ${typeOfSmoke}`);
  }
}

class Horse extends Animal {
  constructor(name, age, gender, color, location, owner) {
    super(name, age, gender, color, location);
    this._owner = owner;
  }
  get owner() {
    return this._owner;
  }
  transport() {
    console.log(`${this.name} helps ${this.owner} in transporting materials`);
  }
}

const Abdulkareem = new Human(
  'Abdulkareem',
  35,
  'male',
  null,
  'Riyadh',
  'married',
  3,
  'construction worker',
);

const Adel = new Horse(
  'Adel',
  15,
  undefined,
  'brown',
  'Riyadh',
  Abdulkareem.name,
);

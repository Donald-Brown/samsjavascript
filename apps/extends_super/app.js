class Pet {
  constructor(animal, name){
    this.animal = animal;
    this.name = name;
  }

  setAnimal(newAnimal){
    this.animal = newAnimal;
  }

  setName(newName){
    this.name = newName;
  }

  get name(){
    return this._name.toUpperCase();
  }

  set name(n){
    //set the first char to uppercase
    // the rest to lowercase
    n = n.charAt(0).toUpperCase() + n.slice(1).toLowerCase();
    this._name = n;
  }
}

class Dog extends Pet {
  constructor(animal, name, breed){
    super(animal, name);
    this.breed = breed;
  }
}

let myDog = new Dog('dog', 'StEvE', 'Bully');
myDog.setName('BiRR');
console.log(myDog);

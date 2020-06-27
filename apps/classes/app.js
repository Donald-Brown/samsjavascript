// function Pet(){
//   this.animal = '';
//   this.name = '';
//   this.setAnimal = function(newAnimal){
//     this.animal = newAnimal;
//   }
//   this.setName = function(newName){
//     this.name = newName;
//   }
// }
// let myDog = new Pet();
// myDog.setAnimal('Dog');
// myDog.setName('Socks');
// console.log(myDog);

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
// let myDog = new Pet();
// myDog.setAnimal('Dog');
// myDog.setName('Socks');
// console.log(myDog);

let myCat = new Pet('Cat', 'Henry');
console.log(myCat);

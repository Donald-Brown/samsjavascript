class Person {
  constructor(name){
    this.name = name;
  }

  setName(newName) {
    this.name = newName;
  }

  get name(){
    return this._name;
  }

  set name(n){
    //set the first char to uppercase
    // the rest to lowercase
    n = n.charAt(0).toUpperCase() + n.slice(1).toLowerCase();
    this._name = n;
  }

}

let Mary = new Person('mary');
Mary.setName('pAttY');
console.log(Mary.name);
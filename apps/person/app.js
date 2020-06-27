class Person {
  constructor(name){
    this.name = name;
    this.info = `This persons name is ${this.name}`;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    // Set first char uppercase
    name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    this._name = name;
  }

  showInfo() {
    console.log(this.info);
  }
  
  sayHello() {
    console.log(`Hello ${this.name}`);
  }
  
}

let mary = new Person('mary');
mary.showInfo();
mary.sayHello();
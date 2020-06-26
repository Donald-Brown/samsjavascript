// create instance with default Object
newObj = new Object();
// begin adding properties
newObj.info = "I'm a shinny new object";
// create  a method to display info
function displayFunc() {
  alert(this.info);
}
//add a method to the object
newObj.showInfo = displayFunc;
// call the method with the dot notation
//newObj.showInfo();

//Define the object type
function newObjType() {
  this.info = "I am a newer shiny object";
  this.showInfo = function () {
    alert(this.info); // shows the value of the info property
  };
  this.setInfo = function (newInfo) {
    this.info = newInfo; // overwrite the property value of info
  };
}
// create an instance of the object instantiating
let newObj2 = new newObjType();
let x = newObj2.info;
//console.log(x);
//newObj2.showInfo();
newObj2.setInfo("New Info");
//newObj2.showInfo();
// New instances are this easy
// The same properties and methods
let newObj3 = new newObjType();
let newObj4 = new newObjType();

// let's make a car
function Car(color, year, make, miles) {
  this.color = color;
  this.year = year;
  this.make = make;
  this.odometerReading = miles;
  this.setOdometer = function (newMiles) {
    this.odometerReading = newMiles;
  };
  this.diplayMiles = function () {
    alert(this.odometerReading);
  };
}
let car1 = new Car("blue", "1990", "Ford", 129000);
let car2 = new Car("red", "2020", "Volvo", "10345");
car2.setOdometer(20456);
//car2.diplayMiles();
//car1.diplayMiles();

// Extending the Car
Car.prototype.displayYearMake = function () {
  alert(this.year + " " + this.make);
};
// car1.displayYearMake();
// car2.displayYearMake();

// Extending The car to Truck
function Truck(weight){
  this.weight = weight;
  this.displayAll = function(){
    alert(`This ${this.year} truck can haul ${this.weight}`);
  }
}
// Extend Car 
Truck.prototype = new Car();
myTruck = new Truck('3100lbs.');
myTruck.year = '2020';
//myTruck.displayAll(); //displays This 2020 truck can haul 3100lbs.


String.prototype.backwards = function(){
  let out = '';
  for (let i = this.length -1; i >= 0; i--){
    out += this.substr(i, 1);
  }
  return out;
}

// let inString = prompt('Enter your string:');
// document.getElementById('display').innerHTML = inString.backwards();

//Encapsulation
function Box(width, length, height){
  function volume(a,b,c){
    return a * b * c;
  }
  this.boxVolume = volume(width, length, height);
}
let crate = new Box(5,4,3);
// alert(`Volume = ${crate.boxVolume}`); // works correctly
// alert(volume(5,4,3)); // Fails because the function volume is invisible

Date.prototype.getYesterday = function(){
  return this.getDay() - 1;
}
let today = new Date();

let yesterday = today.getYesterday();
console.log(yesterday);
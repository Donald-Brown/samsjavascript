// function sayHi(name){
//   let msg = `${name} says: Hello World!`;
//   return function logMessage(){
//     console.log(msg);
//   }
// }

// let helloSteve = sayHi('Steve');
// helloSteve();

// let helloSue = sayHi('Sue');
// helloSue();

function sayHi(name){
  let msg = `${name} says: `;
  return function(addOn){
    msg = msg + addOn;
    console.log(msg);
  }
}

let helloSteve = sayHi('Steve');
let helloSue = sayHi('Sue');

helloSteve('Hi guys');
helloSue('Hi gals');
////////////////////////////////////////////////////////////////
function outer() {
  let count = 0;

  function increment() {
      count++;
      console.log(count);
  }

  function decrement() {
      count--;
      console.log(count);
  }

  function clear() {
      count = 0;
      console.log(count);
  }

  return {increment, decrement, clear}
}
let {increment, decrement, clear} = outer();
increment(); // logs 1
increment(); // logs 2
increment(); // logs 3
decrement(); // logs 2
clear(); // logs 0
increment(); // logs 1

////////////////////////////////////////////////////////////////
function setUp(){
  let counter = 0;
  console.log(`Click count: ${counter}`);
  return function(){
    counter += 1;
    console.log(`Click count: ${counter}`);
  }
}

let add = setUp();

window.onload = function(){
  document.getElementById('btn1').onclick = add;
}

//////////////////////////////////////////
//exercise
var output = [];

for (var i = 0; i < 5; i++) {
  let index = i
  output[i] = function () {
    console.log(index);
  }
}

output[0](); // logs 5, not the expected 0
output[1](); // logs 5, not the expected 1
output[2](); // logs 5, not the expected 2
output[3](); // logs 5, not the expected 3
output[4](); // logs 5, not the expected 4
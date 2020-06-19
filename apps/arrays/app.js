let array = ["Monday", "Tuesday", "Wednesday"];

let arr2 = [];
arr2[0] = "Monday";
arr2[1] = "Tuesday";
arr2[2] = "Wednesday";

let arr3 = new Array();
arr3[0] = "Thursday";
arr3[1] = "Friday";

let week = arr2.concat(arr3);

function wrangleArray() {
  var sentence = "JavaScript is a really cool language";
  var newSentence = "";
  //Write it out
  document.getElementById("div1").innerHTML = "<p>" + sentence + "</p>";
  //Convert to an array
  var words = sentence.split(" ");
  // Remove 'really' and 'cool', and add 'powerful' instead
  var message = words.splice(3, 2, "powerful");
  // use an alert to say what words were removed
  //alert('Removed words: ' + message);
  // Convert the array to a string, and write it out
  document.getElementById("div2").innerHTML = "<p>" + words.join(" ") + "</p>";
}
wrangleArray();

let myArr = [2, 3, 4, 5, 6];

function cube(x) {
  //console.log(x * x * x);
}
myArr.forEach(cube);

function cube2(x) {
  return x * x * x;
}
newArr = myArr.map(cube2);
// newArr = [8, 27, 64, 125, 216];
// map return a new array leaving the original

//spread operator or rest parameter
let fruit1 = ["apple", "banana", "pear"];
let fruit2 = ["orange", "cherry", "fig"];
let fruit3 = ["orange", ...fruit1, "cherry", "fig"];
// fruit3 now contains ['orange', 'apple', 'banana', 'pear', 'cherry', 'fig']
Math.min(...newArr);
// returns 8

function sumArrays(...args){
  let newArr = [];
  for(let arg of args){
    for(let e of arg){
      newArr.push(e);
    }
  }
  return newArr.reduce((a,b) => a+b);
}
console.log(sumArrays(myArr, newArr, [12,54,67,100]));

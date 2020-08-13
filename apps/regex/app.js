// one way to empliment regex is with a regular expression string literal
// let myRegEx = /FooBar/ig;
// let myText = "Hello World!";
// let myText2 = "Hello FooBar! foobar fooBAr";

// console.log(`myRegEx: ${myRegEx}`);
// console.log(`myText.search(myRegEx): ${myText.search(myRegEx)}`); // returns -1 not found
// console.log(`myText2.search(myRegEx): ${myText2.search(myRegEx)}`); // rerurns 6 the index where the first location starts
// console.log(`myText2.match(myRegEx): ${myText2.match(myRegEx)}`); // return ["FooBar", "foobar", "fooBAr"] because of the use of the insinsitive and global flags
// console.log(myRegEx.exec(myText));
// console.log(myRegEx.exec(myText2));
// console.log(myText2.replace(myRegEx, "Hi"));
// console.log(myText2.split(myRegEx));
////////////////////////////////////////////////////////
let string = "John has 7 apples and Diane has 5 apples";
console.log(string.match(/\d+/g));
console.log("index: " + string.search(/\d+/g));

let numString = "1 ;2 ;3;4;  5";
console.log(numString.split(/\s*;\s*/));

function cToF(match) {
  return (match * 9) / 5 + 32;
}
let tempString = "for temperatures between 5 and 65 degrees";
console.log(tempString.replace(/\d+/g, cToF));

function howMany(str) {
  newStr = str.replace(/^\s+|\s+$/g, "");
  return newStr.split(/\s+/g).length;
}

console.log(
  howMany(
    " of a string as the second parameter. After the match has been performed, the function will be called once for each match found, and the function’s return value will then "
  )
);
console.log(howMany(" as        the second "));

function replace(str, word, replacement){
  regex = new RegExp(word, 'ig');
  return str.replace(regex, replacement)
}

console.log(replace("Write code to find all instances of JavaScript within a piece of text, irrespective of case, and replace them all with the word JAVASCRIPT in uppercase.", "javascript", "fun"));
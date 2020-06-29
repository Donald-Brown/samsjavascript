// using childNodes property
// retrieve the ol element via it's id
let olElement = document.getElementById("todoList");
//console.log(olElement.childNodes.length); //logs 7 to the console
// it does so because the browser counts white space
// first three note types 1: element 2: attribute 3: text(inc. whtiespace)
//instead use
let count = 0;
for (let i = 0; i < olElement.childNodes.length; i++) {
  if (olElement.childNodes[i].nodeType === 1) {
    count++;
  }
}
//console.log(count); // logs 3 to the console

// lets see it in a function
// function countListItems(){
//   let olElement = document.getElementById("todoList");
//   let count = 0;
//   for (let i = 0; i < olElement.childNodes.length; i++) {
//     if (olElement.childNodes[i].nodeType === 1) {
//       count++;
//     }
//   }
//   alert(`The ordered list contains ${count} list items`);
// }
//window.onload = countListItems;

// Not what expected
// firstChiid
console.log(olElement.firstChild); // logs #text
// lastChild
console.log(olElement.lastChild); // logs #text
// nextSibling
console.log(olElement.firstChild.nextSibling); // logs <li>mow the lawn</li>

let first = olElement.firstChild;
console.log(first.parentNode); // logs <ol class"todoList">...</ol>

// nodeValue
let text = "";
let pElement = document.getElementById("todoNotes");
// Use for loop to verify type when working with nodes
for (let i = 0; i < pElement.childNodes.length; i++) {
  if (pElement.childNodes[i].nodeType === 3) {
    // push text from valid nodeType
    text += pElement.childNodes[i].nodeValue;
  }
}
console.log(text);
//alert(`The todo paragragh says\n\n ${text}`);

// node name
console.log(pElement.nodeName); // logs P

///////////////////////////////////////////////

// getElementsByTagName()
let listItems = olElement.getElementsByTagName("li");
console.log(`The order list contains ${listItems.length} items`);

// getAttribute
let myNode = document.getElementById("id1");
console.log(myNode.getAttribute("title")); // logs report

/////////////////////////////////////////////////////

// Creating new elements
// first add the element to a variable
let newDiv = document.createElement("div");
// add to appropriate element
document.getElementById("newSec").appendChild(newDiv);

// Creating textNode
let divText = document.createTextNode("I'm in a new div");
// We can even add text to it
newDiv.appendChild(divText);

// We can also clone existing nodes
let myDiv = document.getElementById("id1");
let newDiv2 = myDiv.cloneNode(true); // true copies all children 
//false copies only the element and attributes
// The elements will have the same id's this has to dealt with
// one way to change the attribute
// it can now be added to the DOM
newDiv2.id = 'id2';
console.log(newDiv2); // logs <div id="id2" title="report"></div>

////////////////////////////////////////////////////
// insert before and prepend
// create and fill elemwnt
let newP = document.createElement('p');
let newText = document.createTextNode('I\'m even more text');
newP.appendChild(newText);

// get existing elements
let pDiv = document.getElementById('newPs'); 
let lastP = document.getElementById('idp2');
// insert before the chosen element
pDiv.insertBefore(newP, lastP);

// lets try and prepend
// take note I tried to use direct newP but it didn't show the secoond instance
let newP2 = document.createElement('p');
let newText2 = document.createTextNode('I\'m even more text 2');
newP2.appendChild(newText2);
document.getElementById('idp1').prepend(newP2);

// replaceChild is also available takes two arguments as well

////////////////////////////////////////////////////////////
// replace heading
function replaceHeading(){
  let newH2 = document.createElement('h2');
  let newH2Text = document.createTextNode('Welcome!');
  newH2.appendChild(newH2Text);

  let oldP = document.getElementById('para1');
  let newestDiv = document.getElementById('replaceDiv');
  newestDiv.replaceChild(newH2Text, oldP);
  document.getElementById('btn').onclick = null;
}

// window.onload = function(){
//   document.getElementById('btn').onclick = replaceHeading;
// }

document.getElementById('btn').onclick = replaceHeading;
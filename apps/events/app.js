/**Using event hanlder  */
// May only be used for one event
let wThree = document.getElementById("a1");
wThree.onclick = () => alert("Hello W3C");

/**Utilizing Event listeners */
// Has to call a funtion or it will run immediately
// often referred to as a callback function
let wThree2 = document.getElementById("a2");
wThree2.addEventListener("click", sayHello);
// To remove the listener
wThree2.removeEventListener("click", sayHello);
//The function it calls
function sayHello() {
  alert("Hello W3C");
}

// Ulilizing the event object
let input = document.getElementById("name");
// callback function
function escKey(e) {
  let key = e.keyCode;
  if (key === 27) {
    alert("Possible values for this field are: ...");
  }
}
//Event Listenter
// Take note it loses the 'on' prefix
input.addEventListener('keydown', escKey);

// Prevent default behavior
let rejected = document.getElementById('a3');
function refuseAccess(e){
  alert('Sorry, but you are not authorized to follow this link');
  e.preventDefault();
}
rejected.addEventListener('click', refuseAccess);

// //Event Bubbling
// // The addEventListener has a default third parameter set false
// Originaly tried with arrow function but this didn't work correct
document.getElementById('outer').addEventListener('click', function(event){
  event.target.style.backgroundColor = 'yellow';
  // chrome needs some time to paint yellow
  setTimeout(() => {
    alert("target = " + event.target.tagName + ", this=" + this.tagName);
    event.target.style.backgroundColor = ''
  }, 0);
});

//Another event bubbling using jQuery
$('#parent').click(function(){
  alert('parent clicked');
});
$('#child').click(function(){
  alert('child clicked');
});
$('#other').click(function(e){
  alert('other clicked');
  // The following line stops bubbling from going up the tree
  e.stopPropagation();
});

// this is written without jQuery 
document.getElementById('main2').addEventListener('click', function(){
  alert('main was clicked');
}, true);
document.getElementById('child2').addEventListener('click', function(){
  alert('child was clicked');
}, true)

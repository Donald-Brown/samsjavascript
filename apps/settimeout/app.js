// We create a variaable to hold the timeOut funtion so that we can
// use the button to clear it
let timer = setTimeout("hideId('id1')", 3000);
// hideId selects the desired element and sets its display
//to none
function hideId(elementId){
  document.getElementById(elementId).style.display = 'none';
}
// the timer is called on window load
window.onload = timer;
// We add an event listener to the button and us it to clear 
// the timer if desired
document.getElementById('btn').addEventListener('click', function(){
  clearTimeout(timer);
})


// setInterval
let now = new Date();
let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();

function setClock(){
  if(hours > 12){
    hours = hours - 12;
  }
  if(minutes === 60){
    hours ++;
    minutes = 0;
  }
  if(seconds === 60){
    minutes ++;
    seconds = 0;
  }

    //display time
  document.getElementById("clock").innerHTML = `${hours}:${("0" + minutes).slice(-2)}:${("0" + seconds).slice(-2)}`;

}
//setClock();
setClock();
function incSeconds(){
  seconds ++;
  setClock();
}

window.setInterval(incSeconds, 1000);
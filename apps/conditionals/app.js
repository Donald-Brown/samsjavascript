// Operation in line
// let errorMessage = count + ((count == 1) ? " error " : " errors ") + "found.";

// // multiple ternary conditons
// // maybe not the best
// // should maybe use else if statements
// let icon = (area == 1) ? icon1 : (area == 2) ? icon2 : icon0;

//Basic switch statement evaluating color
// switch(color){
//   case 'red':
//     message = 'Stop!';
//     break;
//   case "yellow":
//     message = 'Proceed with caution';
//     break;
//   case 'green':
//     message = 'go ahead';
//     break;
//   default:
//     message = 'The light is out, use caution';
// }

//for of loop
let days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
let message = "";
for (const day of days) {
  message += `Day is ${day}<br>`;
}
document.getElementById("days").innerHTML = message;

// function fibonacci() { // a generator function
//   let [prev, curr] = [0, 1];
//   while (true) {
//     [prev, curr] = [curr, prev + curr];
//     yield curr;
//   }
// }

// for (const n of fibonacci()) {
//   console.log(n);
//   // truncate the sequence at 1000
//   if (n >= 1000) {
//     break;
//   }
// }

let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
let mounthsDisplay = "";
for (let month in months) {
  mounthsDisplay += `Month ${(parseInt(month) + 1)} is ${months[month]}.<br>`;
}

document.getElementById("months").innerHTML = mounthsDisplay;


// let me know what day of the week it is 
let now = new Date();
let today = now.getDay();
let todaysMessage = `today is ${days[today]}`;
document.getElementById('today').innerHTML = todaysMessage;
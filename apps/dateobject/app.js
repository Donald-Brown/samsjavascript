const div1 = document.getElementById("div1");

let myDate = new Date();

let year = myDate.getFullYear(); // four digit year
let month = myDate.getMonth(); // month num stating with 0
let date = myDate.getDate(); // day of month 1-31
let day = myDate.getDay(); // day of the week 0-6 starts on sunday
let hour = myDate.getHours(); // hours of day 0 -23
let minute = myDate.getMinutes(); // Minutes of the hour 0 - 59
let second = myDate.getSeconds(); // seconds of the minute 0 - 59
let milliseconds = myDate.getMilliseconds(); // milliseconds
let totalmilliseconds = new Date().getTime(); // Total milliseconds since Jan 1st 1970

div1.innerHTML = `<p>The four digit year: <strong>${year}</strong></p>
                  <p>Month starting with 0: <strong>${month}</strong></p>
                  <p>The day of the month 1 - 31: <strong>${date}</strong></p>
                  <p>The Day of the Week 0 - 6 starts on Sunday: <strong>${day}</strong></p>
                  <p>Hours of the Day 0 - 23: <strong>${hour}</strong></p>
                  <p>Minutes of the hour 0 - 59: <strong>${minute}</strong></p>
                  <p>Seconds in minute 0 - 59: <strong>${second}</strong></p>
                  <p>Milliseconds in minute: <strong>${milliseconds}</strong></p>
                  <p>Total Milliseconds since Jan 1<sup>st</sup> 1970: <strong>${totalmilliseconds}</strong></p>
                  `;

var mydate = new Date(); // current date and time
document.write("Object created on day number " + mydate.getDay() + "<br />");
mydate.setDate(14); // change day of month to the 14th
document.write(
  "After amending date to 14th, the day number is " + mydate.getDay() + "<br/>"
);
document.write(`${mydate} <br /><br />`);

let newdate = new Date();
document.write(`created: ${newdate.toDateString()} ${newdate.toTimeString()} <br />`);
newdate.setDate(newdate.getDate() + 33); // adds 33 days to the 'date' part
document.write(
  `After adding 33  days: ${newdate.toDateString()} ${newdate.toTimeString()}`
);

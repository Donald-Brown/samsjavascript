// simple JSON string 
let mary = '{ "name":"Mary", "age":45, "eyes":"blue" }';
// parse the string to an object
let maryObject = JSON.parse(mary);
console.log(maryObject);
let output = "";
for(param in maryObject){
  output += `${param} = ${maryObject[param]} \n`
}
console.log(output);

// creating new dan object
let dan = new Object()
dan.name = 'Dan';
dan.age = 46;
dan.eyes = 'brown';
console.log(dan); // app.js:17
// flattening the dan object
console.log(JSON.stringify(dan)); // app.js:18

// associative arrays
let conferenceDays = {
  "startDay" : "Monday",
  "nextDay" : "Tuesday",
  "lastDay" : "Wednesday"
};
console.log(conferenceDays["startDay"]); // app.js:27 
console.log(conferenceDays.nextDay); // app.js:28


// fetch api
function getData(){
  fetch('https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json')
  .then((res) => res.json())
  .then((data) => {
    //console.log(data);
    let output = '<h2>quotes</h2>';
    data.forEach(function(quote, index){
      output += `
      <ul>
        <li>Index: ${index}</li>
        <li>Qoute: ${quote.quote}</li>
        <li>Author: ${quote.author}</li>
      </ul>
      `;
    });
    document.getElementById('quote-div').innerHTML = output;
  })
  .catch((err) => {
    console.log(err);
  });
}
getData();

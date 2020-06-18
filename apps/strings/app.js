document.write(`<h3>indexOf</h3>`);
document.write(`<p>let string1 = "The Quick brown fox"</p>`);
let string1 = "The Quick brown fox";
document.write(
  `string1.indexOf("fox"): <strong>${string1.indexOf("fox")}</strong><br />`
);
document.write(
  `string1.indexOf("dog"): <strong>${string1.indexOf("dog")}</strong><br />`
);

document.write(`<h3>lastIndexOf</h3>`);
document.write(
  `string1.lastIndexOf("o"): <strong>${string1.lastIndexOf("o")}</strong><br />`
);

document.write(`<h3>repeat</h3>`);
document.write(
  `string1.repeat(3): <strong>${string1.repeat(3)}</strong><br />`
);

document.write(`<h3>replace</h3>`);
document.write(
  `string1.replace("brown", "orange"): <strong>${string1.replace(
    "brown",
    "orange"
  )}</strong><br />`
);

document.write(`<h3>split rturns new array</h3>`);
document.write(
  `string1.split(" "): <strong>${string1.split(" ")}</strong><br />`
);

document.write(`<h3>split plus join</h3>`);
document.write(
  `string1.split(" ").join("-"): <strong>${string1
    .split(" ")
    .join("-")}</strong><br />`
);

document.write(`<h3>substr takes 1 plus option second</h3>`);
document.write(
  `string1.substr(4, 9): <strong>${string1.substr(4, 9)}</strong><br />`
);
document.write(
  `string1.substr(4): <strong>${string1.substr(4)}</strong><br />`
);

document.write(`<h3>toUpperCase and toLowerCase</h3>`);
document.write(
  `string1.toUpperCase(): <strong>${string1.toUpperCase()}</strong><br />`
);
document.write(
  `string1.toLowerCase(): <strong>${string1.toLowerCase()}</strong><br />`
);

document.write(
  `<pre>
function WordDetector(input) {
  input = input.toLowerCase();
  if(input.indexOf("word")){
    document.write('contains word');
  }
  document.write('doesn't have it);
}
</pre>`
);

function wordDetector(input, word) {
  input = input.toLowerCase();
  if (input.indexOf(word) >= 0) {
    return document.write(` contains word at index ${input.indexOf(word)}<br/>`);
  }
  document.write(" doesn't have it<br/>");
}
document.write(`wordDetector('I will figure this out', 'word'):`);
wordDetector("I will figure this out", 'word');

document.write(`wordDetector('I will figure this word out', 'word'):`);
wordDetector("I will figure this word out", 'word');


function truncatedString(str) {
  if(str.length > 20) {
    return str.substr(0, 19).concat("...");
  }
  return str;
}
document.write(
  `<pre>
function truncatedString(str) {
  if(str.length > 20) {
    return str.substr(0, 19).concat("...");
  }
  return str;
}
</pre>`
);
document.write(`truncatedString('Lorem ipsum dolor, sit amet consectetur adipisicing elit.'): <strong>${truncatedString('Lorem ipsum dolor, sit amet consectetur adipisicing elit.')}</strong><br/>`);
document.write(`truncatedString('Lorem ipsum'): <strong>${truncatedString('Lorem ipsum')}</strong><br/>`);
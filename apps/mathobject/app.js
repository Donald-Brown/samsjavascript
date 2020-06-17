let num1 = 12.55;
let num2 = 12.45;

document.write(`<h2>Rounding</h2>`);
document.write(`number 1 = ${num1} <br />`);
document.write(`number 2 = ${num2} <br />`);
document.write(`Math.floor(num1); = ${Math.floor(num1)}<br/>`);
document.write(`Math.ceil(num1); = ${Math.ceil(num1)}<br/>`);
document.write(`Math.round(num1); = ${Math.round(num1)}<br/>`);
document.write(`Math.round(num2); = ${Math.round(num2)}<br/><br/>`);

document.write(`<h2>Minimum Maximum</h2>`);
let ages = [23, 54, 65, 56, 75, 3];
document.write(`let ages = ${ages} <br />`);
document.write(`Math.min(...ages); = ${Math.min(...ages)}<br/>`);
document.write(`Math.max(...ages); = ${Math.max(...ages)}<br/>`);

document.write(`<h2>Random number</h2>`);
document.write(`Math.random(); = ${Math.random()}<br/>`);
document.write(`<h2>Random number between 1 - 10</h2>`);
document.write(`Math.floor((Math.random() * 10) + 1; = ${Math.floor((Math.random() * 10) + 1)}<br/>`);
document.write(`Math.ceil(Math.random() * 10); = ${Math.ceil(Math.random() * 10)}<br/>`);

document.write(`<h2>Constants</h2>`);
document.write(`Math.E; = ${Math.E}<br/>`);
document.write(`Math.PI; = ${Math.PI}<br/>`);






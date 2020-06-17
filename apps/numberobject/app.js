document.write(`<h2>Number.isNaN()</h2>`);
document.write(`Number.isNaN(3): <strong>${Number.isNaN(3)}</strong><br />`);
document.write(`Number.isNaN(3.14159): <strong>${Number.isNaN(3.14159)}</strong><br />`);
document.write(`Number.isNaN(0 /0): <strong>${Number.isNaN(0 / 0)}</strong><br />`);
document.write(`Number.isNaN(3* Blah): <strong>${Number.isNaN(3 * 'Blah')}</strong><br />`);

document.write(`<h2>Number.isInteger()</h2>`);
document.write(`Number.isInteger(666): <strong>${Number.isInteger(666)}</strong><br />`);
document.write(`Number.isInteger(-666): <strong>${Number.isInteger(-666)}</strong><br />`);
document.write(`Number.isInteger(12*7): <strong>${Number.isInteger(12*7)}</strong><br />`);
document.write(`Number.isInteger(0): <strong>${Number.isInteger(0)}</strong><br />`);
document.write(`Number.isInteger(3/4): <strong>${Number.isInteger(3/4)}</strong><br />`);
document.write(`Number.isInteger('666'): <strong>${Number.isInteger('666')}</strong><br />`);
document.write(`Number.isInteger(Infinity): <strong>${Number.isInteger(Infinity)}</strong><br />`);

document.write(`<h2>Number.parseFloat()</h2>`);
document.write(`Number.parseFloat("21.4"): <strong>${Number.parseFloat("21.4")}</strong><br />`);
document.write(`Number.parseFloat("76 trombones"): <strong>${Number.parseFloat("76 trombones")}</strong><br />`);
document.write(`Number.parseFloat("The Magnificent 7"): <strong>${Number.parseFloat("The Magnificent 7")}</strong><br />`);

document.write(`<h2>Number.parseInt()</h2>`);
document.write(`<h4>second param is the base</h4>`);
document.write(`Number.parseInt(18.84): <strong>${Number.parseInt(18.84)}</strong><br />`);
document.write(`Number.parseInt("12px" , 10): <strong>${Number.parseInt("12px" , 10)}</strong><br />`);
document.write(`Number.parseInt("1110", 2): <strong>${Number.parseInt("1110", 2)}</strong><br />`);
document.write(`Number.parseInt("hello"): <strong>${Number.parseInt("hello")}</strong><br />`);

document.write(`<h2>Number.isFinite()</h2>`);
document.write(`Number.isFinite(21): <strong>${Number.isFinite(21)}</strong><br />`);
document.write(`Number.isFinite("this is not a number"): <strong>${Number.isFinite("this is not a number")}</strong><br />`);
document.write(`Number.isFinite(Math.sqrt(-1)): <strong>${Number.isFinite(Math.sqrt(-1))}</strong><br />`);

document.write(`<h2>Number() function</h2>`);
document.write(`Number(true): <strong>${Number(true)}</strong><br />`);
document.write(`Number(false): <strong>${Number(false)}</strong><br />`);
document.write(`Number("666"): <strong>${Number("666")}</strong><br />`);
document.write(`Number(021-555-3565): <strong>${Number(021-555-3565)}</strong><br />`);
document.write(`Number("hello"): <strong>${Number('hello')}</strong><br />`);

document.write(`<h2>Passing new Date() to Number gives milliseconds since Unix Epoch</h2>`);
document.write(`Number(new Date()): <strong>${Number(new Date())}</strong><br />`);
document.write(`<h2>Convert to milliseconds to date by passsing new Date the milliseconds</h2>`);
document.write(`new Date(1592428530167): <strong>${new Date(1592428530167)}</strong><br />`);

document.write(`<h2>Exercise</h2>`);
function formatNum(num, places) {
  return num.toFixed(places);
}
document.write(`formatNum(4.673, 4): <strong>${formatNum(4.673, 4)}</strong><br />`);
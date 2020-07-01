// need to have context

// fillRect(x,y,width,height); //draw a filled rectangle
// strokeRect(x,y,width,height); //draw an outlined rectangle
// clearRect(x,y,width,height); // clear the rectangle
// Draw a circular arc of radius r, having circle center x, y, from startAngle to endAngle.

// arc(x, y, r, startAngle, endAngle, anti)
// To create shapes using these basic commands, you need some additional methods:

// object.beginPath();
// object.closePath(); //complete a partial shape
// object.stroke(); //draw an outlined shape
// object.fill(); //draw a filled shape
var context;
var x = 50;
var y = 50;
var counter = 0;
function paint() {
  context.beginPath();
  context.fillStyle = "#ff0000";
  context.arc(x, y, 15, 0, Math.PI * 2, false);
  context.closePath();
  context.fill();
}
function animate() {
  context.clearRect(0, 0, 400, 300);
  counter++;
  x += 20 * Math.sin(counter);
  y += 20 * Math.cos(counter);
  paint();
}
window.onload = function () {
  context = canvas1.getContext("2d");
  setInterval(animate, 100);
};

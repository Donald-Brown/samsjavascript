function telltime() {
  var out = "";
  var now = new Date();
  out += "<br />Date: " + now.getDate();
  out += "<br />Month: " + now.getMonth();
  out += "<br />Year: " + now.getFullYear();
  out += "<br />Hours: " + now.getHours();
  out += "<br />Minutes: " + now.getMinutes();
  out += "<br />Seconds: " + now.getSeconds();
  document.getElementById("div1").innerHTML = out;
}

window.onload = function(){
 document.getElementById('section1').innerHTML = `
    The current date and time are:<br/>
     <div id="div1"></div>
     <input type="button" id="btn" value="Refresh" />
  `; 
  document.getElementById('btn').onclick  = () => location.reload();
  telltime();
}
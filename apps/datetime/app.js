function tellTime() {
  let out = "";
  let now = new Date();

  out += `<br/>Date: ${now.getDate()}`;
  out += `<br/>Month: ${now.getMonth()}`;
  out += `<br/>Year: ${now.getFullYear()}`;
  out += `<br/>Hours: ${now.getHours()}`;
  out += `<br/>Minutes: ${now.getMinutes()}`;
  out += `<br/>Seconds: ${now.getSeconds()}`;
  document.getElementById("div1").innerHTML = out;
  document.write(
    `<br/>${("0" + now.getDate()).slice(-2)}/${("0" + (now.getMonth() + 1)).slice(-2)}/${now.getFullYear()}
    ${('0' + now.getHours()).slice(-2)}:${('0' + now.getMinutes()).slice(-2)}:${('0' + now.getSeconds()).slice(-2)}`
  );
}

tellTime();

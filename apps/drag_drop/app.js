function allowDrop(e){
  e.preventDefault();
}

function drag(e){
  e.dataTransfer.setData("Text", e.target.id);
}

function drop(e){
  let data = e.dataTransfer.getData("Text");
  e.target.appendChild(document.getElementById(data));
  e.preventDefault();
}

window.onload = function(){
  let dragged = document.getElementById('drag1');
  let dropHere = document.getElementById('drop1');
  dragged.ondragstart = drag;
  dropHere.ondragover = allowDrop;
  dropHere.ondrop = drop;
}
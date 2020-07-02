function toggle(){
  let element = document.getElementById('id1');
  if(element.style.backgroundColor == 'red'){
    element.style.backgroundColor = 'yellow';
    element.style.color = 'black';
  }else{
    element.style.backgroundColor = 'red';
    element.style.color = 'white';
  }
}

document.getElementById('btn').addEventListener('click', toggle);

function toggleClass(){
  let element = document.getElementById('id2');
  if(element.className === 'classA'){
    element.className = 'classB';
  }else{
    element.className = 'classA';
  }
}
document.getElementById('btn2').addEventListener('click', toggleClass);

document.getElementById('stylesheet').innerHTML = document.styleSheets.length + 'styles';
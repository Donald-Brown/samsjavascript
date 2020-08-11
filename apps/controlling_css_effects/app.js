window.onload = function(){
  let $ = function(id){
    return document.getElementById(id);
  } 

  $('btn1').onclick = function(){
    $('div1').style.background = 'radial-gradient(at top left, white, #6699cc)';
    $('div2').style.boxShadow = '10px 10px 10px #808080';
  }

  $('btn2').onclick = function(){
    $('div1').style.background = 'radial-gradient(at top right, white, #6699cc)';
    $('div2').style.boxShadow = '-10px 10px 10px #808080';
  }

  $('btn3').onclick = function(){
    $('div1').style.background = 'radial-gradient(at bottom, white, #6699cc)';
    $('div2').style.boxShadow = '0px -10px 10px #808080';
  }
}
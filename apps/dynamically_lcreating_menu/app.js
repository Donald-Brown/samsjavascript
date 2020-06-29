function makeMenu(){
  // get all h2 elements
  let h2s = document.getElementsByTagName('h2');
  // create new page menu div
  let menu = document.createElement('div');
  //create ul element and append to div
  let menuUl = document.createElement('ul');
  menu.appendChild(menuUl);
  // loop through h2 add do stuff
  for(let i = 0; i < h2s.length; i++){
    // get text node of h2 element 
    let itemText = h2s[i].childNodes[0].nodeValue;
    // add a list item
    let menuLi = document.createElement('li');
    // append li to menu list 
    menuUl.appendChild(menuLi);
    // create link for li
    let menuLiA = document.createElement('a');
    menuLi.appendChild(menuLiA);
    // set href of the link
    menuLiA.setAttribute("href", `#item${i}`);
    // set text of the link
    let menuText = document.createTextNode(itemText);
    menuLiA.appendChild(menuText);
    // create matching anchor element
    let anc = document.createElement('a');
    anc.setAttribute('name', `item${i}`);
    // add anchor before heading
    document.body.insertBefore(anc, h2s[i]);
  }
  // add menu to the top of the page
  document.body.insertBefore(menu, document.body.firstChild);
}
makeMenu();
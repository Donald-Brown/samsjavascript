function createCookie(name, value, days, path, domain, secure){
  let expires = '';
  if(days){
    let date = new Date();
    date.setTime(date.getTime() + (days*24*60*60*1000));
    expires = date.toGMTString();
  }
  cookieString = name + '=' + escape(value);
  if(expires) cookieString += ';expires=' + expires;
  if(path) cookieString += ';path=' + escape(path);
  if(domain) cookieString += ';domain=' + escape(domain);
  if(secure) cookieString += ';secure';
  document.cookie = cookieString;
}

function getCookie(name){
  let nameEquals = name + '=';
  let crumbs = document.cookie.split(';');
  for(let i = 0; i < crumbs.length; i++){
    let crumb = crumbs[i].trim();
    if(crumb.indexOf(nameEquals) === 0){
      return unescape(crumb.substring(nameEquals.length, crumb.length));
    }
  }
  return null;
}

function deleteCookie(name){
  createCookie(name, '', -1);
}


createCookie('username', 'sam jones', 5);
// createCookie('location', 'USA');
createCookie('status', 'fullmember', 5);

deleteCookie('location');

console.log(getCookie('status'));
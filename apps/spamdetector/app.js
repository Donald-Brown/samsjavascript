let str = prompt('enter a string');
alert(spamDetector(str));

// Function to detect the word 'fake'
function spamDetector(string){
  input = string.toLowerCase();
  if(input.indexOf('fake') < 0){
    return false;
  }
  return true;
}

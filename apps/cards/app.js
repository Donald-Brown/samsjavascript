function Card(suit, face) {
  this.suit = suit;
  this.face = face;
  this.displayCard = function () {
    return `${this.face} of ${this.suit}`;
  };
  this.setCard = function (newSuit, newFace) {
    this.suit = newSuit;
    this.face = newFace;
  };

  // Random cards
  let faces = [
    "Ace",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "Jack",
    "King",
    "Queen",
  ];
  let suits = ["Hearts", "Spades", "Clubs", "Diamonds"];
  this.setRandomCard = function () {
    this.suit = suits[Math.floor(Math.random() * suits.length)];
    this.face = faces[Math.floor(Math.random() * faces.length)];
  };
}

let myCard = new Card("Spades", "Ace");
document.getElementById("display").innerHTML = myCard.displayCard();
myCard.setCard("hearts", "King");
document.getElementById("display2").innerHTML = myCard.displayCard();
myCard.setRandomCard();
document.getElementById("display3").innerHTML = myCard.displayCard();

// probably a better way for sure but not seeing it now!
let next = function(){
  location.reload();
}
document.getElementById('btn').addEventListener('click', next);
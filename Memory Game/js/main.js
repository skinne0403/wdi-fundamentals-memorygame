var cards = ["queen", "queen", "king", "king"];
var cardInPlay = [];

var checkForMatch = function(){
  if (cardInPlay[0] === cardInPlay[1]) {
console.log("You found a match!");
} else {
console.log("Sorry, try again.");
}
};

var flipCard = function(cardId){
  if (cardInPlay[0] === cardInPlay[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");
  }
    console.log("User flipped "+ cards[cardId]);
    checkForMatch();
};
flipCard(0);
flipCard(2);

// question... should there be a push?
//Should it be alert or console.log
 //call the checkForMatch function from inside the flipCard function, where the lines above used to sit.
//Use the push method to add
//the card that the user flipped (cards[cardId])
//
// previous var cardOne = cards[0];
//cardsInPlay.push(cardOne);
//console.log("User flipped " + cardOne);

//var cardTwo = cards[2];
//cardsInPlay.push(cardTwo);
//console.log("User flipped " + cardTwo);

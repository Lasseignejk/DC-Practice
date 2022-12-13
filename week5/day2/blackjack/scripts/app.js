// 1 [x] Familiarise yourself with the HTML and JS
// 2 [x] Style the page
// 3 [x] Cards on the table
// 4 [x] Dealing the cards
// 5 [x] Hit me
// 6 [x] Creating a deck
// 7 [x] Deal the deck
// 8 [x] Image from cards
// 9 [x] Render hands 
// 10 [x] Shuffle the deck
// 11 [] Calculate points for a hand 
// 12 [] Display points
// 13 [] Busts
// 14 [] Player stands
// 15 [] Determine winner 
// 16 [] Restart game

const dealerHand = document.getElementById("dealer-hand");
const playerHand = document.getElementById("player-hand");
const deck = [];
const dealerCards = [];
const playerCards = [];
const suits = ["hearts", "spades", "clubs", "diamonds"];
const ranks = ["ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];


const makeDeck = (rank, suit) => {
  const card = {
    rank: rank,
    suit: suit,
    pointValue: rank > 10 ? 10 : rank,
  };
  deck.push(card);
};
for (let suit of suits) {
  for (const rank of ranks) {
    makeDeck(rank, suit);
  }
}

function dealToPlayer() {
  const randomNum = Math.floor(Math.random()*deck.length);
  card = deck.splice(randomNum, 1)
  console.log(deck)
  // playerCards.push(card)
  // getCardImage(playerCards)
  playerHand.append(getCardImage(card))
}

function dealToDealer() {
  const randomNum = Math.floor(Math.random()*deck.length);
  card = deck.splice(randomNum, 1)
  // dealerCards.push(card)
  // getCardImage(dealerCards)
  dealerHand.append(getCardImage(card))
}

const getCardImage = (array) => {
  for (const item of array) {
    // console.log(item)
  let newCard = document.createElement("img");
  newCard.setAttribute("src", `/week5/day2/blackjack/images/${item["rank"]}_of_${item["suit"]}.png`)

 return newCard
  }
}

const dealButton = document.getElementById("deal-button")
const hitButton = document.getElementById("hit-button")

dealButton.addEventListener("click", () => deal())
hitButton.addEventListener("click", () => hit())

function deal() {
  dealToPlayer();
  dealToDealer();
  dealToPlayer();
  dealToDealer();
}

function hit() {
  dealToPlayer();
  dealToDealer();
}






// Joe hint: maybe run the code in the curly braces below
window.addEventListener("DOMContentLoaded", () => {

});
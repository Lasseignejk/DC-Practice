// 1 [x] Familiarise yourself with the HTML and JS
// 2 [x] Style the page
// 3 [x] Cards on the table
// 4 [x] Dealing the cards
// 5 [] Hit me
// 6 [] Creating a deck
// 7 [] Deal the deck
// 8 [] Image from cards
// 9 [] Render hands 
// 10 [] Shuffle the deck
// 11 [] Calculate points for a hand 
// 12 [] Display points
// 13 [] Busts
// 14 [] Player stands
// 15 [] Determine winner 
// 16 [] Restart game

const dealerHand = document.getElementById("dealer-hand");
const playerHand = document.getElementById("player-hand");
const deck = [];
const suits = ["hearts", "spades", "clubs", "diamonds"];
const ranks = ["ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "jack", "queen", "king"];
// const makeDeck = (rank, suit) => {
//   const card = {
//     rank: rank,
//     suit: suit,
//     pointValue: rank > 10 ? 10 : rank,
//   };
//   deck.push(card);
// };

// for (let suit of suits) {
//   for (const rank of ranks) {
//     makeDeck(rank, suit);
//   }
// }

const dealButton = document.getElementById("deal-button")

dealButton.addEventListener("click", () => deal())

function deal() {
  dealToPlayer();
  dealToDealer();
  dealToPlayer();
  dealToDealer();
}

function dealToPlayer() {
  const card = document.createElement("img");
  card.setAttribute("src", "2_of_hearts.png");
  playerHand.append(card);
}

function dealToDealer() {
  const card = document.createElement("img");
  card.setAttribute("src", "2_of_spades.png");
  dealerHand.append(card);
}



// Joe hint: maybe run the code in the curly braces below
window.addEventListener("DOMContentLoaded", () => {

});
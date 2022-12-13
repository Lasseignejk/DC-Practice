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
// 11 [x] Calculate points for a hand 
// 12 [x] Display points
// 13 [] Busts
// 14 [] Player stands
// 15 [] Determine winner 
// 16 [] Restart game

const dealerHand = document.getElementById("dealer-hand");
const playerHand = document.getElementById("player-hand");
const deck = [];
const dealerCards = [];
const playerCards = [];
const playerPoints = document.getElementById("player-points")
const dealerPoints = document.getElementById("dealer-points")
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

function dealToPlayer() {
  const randomNum = Math.floor(Math.random()*deck.length);
  card = deck.splice(randomNum, 1)
  playerCards.push(card)
  playerHand.append(getCardImage(card))
}

function dealToDealer() {
  const randomNum = Math.floor(Math.random()*deck.length);
  card = deck.splice(randomNum, 1)
  dealerCards.push(card)
  dealerHand.append(getCardImage(card))
}

const calculatePoints = (array) => {
  let sum = 0;
  array.forEach((card) => {
    value = card[0]["pointValue"]
    sum += value
    console.log(sum)
  })
  return sum
}

const calculatePointsOnHit = (points, array) => {
  points.innerHTML = 0
  let sum = parseInt(points.innerHTML);
  array.forEach((card) => {
    value = card[0]["pointValue"]
    sum += value
    // console.log(sum)
  })
  // return sum
  points.innerHTML = sum
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
dealButton.addEventListener("click", () => {
  dealerPoints.append(calculatePoints(dealerCards))
})
dealButton.addEventListener("click", () => {
  playerPoints.append(calculatePoints(playerCards))
})


hitButton.addEventListener("click", () => hit())
hitButton.addEventListener("click", () =>   calculatePointsOnHit(dealerPoints, dealerCards))
hitButton.addEventListener("click", () =>   calculatePointsOnHit(playerPoints, playerCards))








// Joe hint: maybe run the code in the curly braces below
window.addEventListener("DOMContentLoaded", () => {

});
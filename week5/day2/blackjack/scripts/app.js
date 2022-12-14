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
// 13 [x] Busts
// 14 [x] Player stands
// 15 [x] Determine winner 
// 16 [x] Restart game
// 17 [] Ace functionality

const dealerHand = document.getElementById("dealer-hand");
const playerHand = document.getElementById("player-hand");
const dealButton = document.getElementById("deal-button")
const hitButton = document.getElementById("hit-button")
const standButton = document.getElementById("stand-button")
const messageBox = document.getElementById("messages")
const deck = [];
let dealerCards = [];
let playerCards = [];
const playerPoints = document.getElementById("player-points")
const dealerPoints = document.getElementById("dealer-points")
const suits = ["hearts", "spades", "clubs", "diamonds"];
const ranks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
let stillPlaying = true;

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
  messages.innerText = "";
  playerPoints.innerHTML = "";
  dealerPoints.innerHTML = "";
  playerHand.innerHTML = "";
  dealerHand.innerHTML = "";
  dealerCards = [];
  playerCards = [];
  dealToPlayer();
  dealToDealer();
  dealToPlayer();
  dealToDealer();
}

function hit() {
  dealToPlayer();
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
  })
  return sum
}

const calculatePointsOnHit = (points, array) => {
  points.innerHTML = 0
  let sum = parseInt(points.innerHTML);
  array.forEach((card) => {
    value = card[0]["pointValue"]
    sum += value
  })
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

const resetButtons = () => {
  hitButton.disabled = true;
  dealButton.disabled = false;
  standButton.disabled = true;
}

const disableDealButton = () => {
  dealButton.disabled = true;
}

const enableButton = () => {
  hitButton.disabled = false;
  standButton.disabled = false;
}

const gameLogic = () => {
  if (parseInt(playerPoints.innerHTML) > 21) {
    messages.append("Player bust -- dealer wins");
    resetButtons();
    stillPlaying = false
  }
  if (parseInt(dealerPoints.innerHTML) > 21) {
    messages.append("Dealer bust -- player wins");
    resetButtons();
    stillPlaying = false
  }
  if (parseInt(playerPoints.innerHTML) == 21) {
    messages.append("Player has reached 21 -- Player wins");
    resetButtons();
    stillPlaying = false
  }
}
function stand() {
  if (parseInt(dealerPoints.innerHTML) > parseInt(playerPoints.innerHTML)) {
    messages.append("Dealer wins")
    resetButtons();
  } else {
  dealToDealer();
  calculatePointsOnStand(dealerPoints, dealerCards)
  gameLogic();
  if (stillPlaying == true) {
  standLogic();}
  }
}

const calculatePointsOnStand = (points, array) => {
  points.innerHTML = 0
  let sum = parseInt(points.innerHTML);
  array.forEach((card) => {
    value = card[0]["pointValue"]
    sum += value
  })
  points.innerHTML = sum
}

const standLogic = () => {
  if (parseInt(dealerPoints.innerHTML) < 17) {
    dealToDealer();
    calculatePointsOnStand(dealerPoints, dealerCards)
    gameLogic();
  } 
  if (parseInt(dealerPoints.innerHTML) >= 17) {
    if (parseInt(dealerPoints.innerHTML) > parseInt(playerPoints.innerHTML)) {
      messages.append("Dealer wins")
      resetButtons();
    } else if (parseInt(dealerPoints.innerHTML) == parseInt(playerPoints.innerHTML)) {
      messages.append("Tie")
      resetButtons();
    } else {
      messages.append("Player wins")
      resetButtons();
    }
  }
}

dealButton.addEventListener("click", () => {
  deal();
  dealerPoints.append(calculatePoints(dealerCards));
  playerPoints.append(calculatePoints(playerCards));
  disableDealButton();
  enableButton();
  gameLogic();
})

hitButton.addEventListener("click", () => {
  hit();
  calculatePointsOnHit(dealerPoints, dealerCards);
  calculatePointsOnHit(playerPoints, playerCards);
  gameLogic();
})

standButton.addEventListener("click", () => {
  stand();
  calculatePointsOnStand(dealerPoints, dealerCards);
})



// Joe hint: maybe run the code in the curly braces below
window.addEventListener("DOMContentLoaded", () => {

});
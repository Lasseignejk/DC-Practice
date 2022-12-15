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
// 17 [x] Ace functionality
// 18 [] Have first dealer card be face down, flip on stand? 

const dealerHand = document.getElementById("dealer-hand");
const playerHand = document.getElementById("player-hand");
const dealButton = document.getElementById("deal-button")
const hitButton = document.getElementById("hit-button")
const standButton = document.getElementById("stand-button")
const messageBox = document.getElementById("messages")
let deck = [];
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

// ** deal, hit, and stand **
function deal() {
  messages.innerText = "";
  playerPoints.innerHTML = "";
  dealerPoints.innerHTML = "";
  playerHand.innerHTML = "";
  dealerHand.innerHTML = "";
  deck = []
  for (let suit of suits) {
  for (const rank of ranks) {
    makeDeck(rank, suit);
  }
}
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

function stand() {
  console.log("stand()")
  if (parseInt(dealerPoints.innerHTML) < 17) {
    while (parseInt(dealerPoints.innerHTML) < 17) {
      // console.log("dealer's points are less than 17, deal another card")
      dealToDealer();
      calculatePointsOnStand(dealerPoints, dealerCards)
    }
    standLogic()
  } else {
    // console.log("dealer's points are more than 17, move straight to standLogic()")
    standLogic()
  }
}

// ** deal to player/dealer **
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

// ** Check for aces ** 
const checkAce = (sum, array) => {
  console.log("checkAce()")
    array.forEach((element) => {
      if (sum < 21) {
        if (element[0]["rank"] === 1) {
          console.log("ace found")
          element.pointValue = 11;
          sum += 10
          console.log(`sum is ${sum}`)
          return sum
        }
      }
      if (sum > 21) {
        if (element[0]["rank"] === 1) {
          console.log("ace found")
          element.pointValue = 11;
          sum -= 10
          console.log(`sum is ${sum}`)
          return sum
        }    
      }
      return sum
    })
    return sum
}


// ** Calculating points functions **
const calculatePoints = (array) => {
  let sum = 0;
  array.forEach((card) => {
    value = card[0]["pointValue"] 
    sum += value
  })
  let sum2 = checkAce(sum, array)
  console.log(`sum after running checkAce, back in the calculatePoints is ${sum2}`)
  return sum2
}

const calculatePointsOnHit = (points, array) => {
  points.innerHTML = 0
  let sum = parseInt(points.innerHTML);
  array.forEach((card) => {
    value = card[0]["pointValue"]
    sum += value
  })
  let sum2 = checkAce(sum, array)
  points.innerHTML = sum2
}

const calculatePointsOnStand = (points, array) => {
  points.innerHTML = 0
  let sum = parseInt(points.innerHTML);
  array.forEach((card) => {
    value = card[0]["pointValue"]
    sum += value
  })
  let sum2 = checkAce(sum, array)
  points.innerHTML = sum2
}


// ** Get image for the cards **
const getCardImage = (array) => {
  for (const item of array) {
  let newCard = document.createElement("img");
  newCard.setAttribute("src", `/week5/day2/blackjack/images/${item["rank"]}_of_${item["suit"]}.png`)
  return newCard
  }
}

// ** Game logic / stand logic **
const gameLogic = () => {
  if (parseInt(playerPoints.innerHTML) > 21) {
    messages.append("Player bust -- dealer wins");
    resetButtons();
  } 
  if (parseInt(dealerPoints.innerHTML) == 21) {
    messages.append("Dealer has reached 21 -- Dealer wins");
    resetButtons();
  } 
  if (parseInt(playerPoints.innerHTML) == 21) {
    messages.append("Player has reached 21 -- Player wins");
    resetButtons();
  } 
}

const standLogic = () => {
  calculatePointsOnStand(dealerPoints, dealerCards)

  if (((parseInt(dealerPoints.innerHTML)) >= 17) && ((parseInt(dealerPoints.innerHTML) <= 21))) {

    if (parseInt(dealerPoints.innerHTML) > parseInt(playerPoints.innerHTML)) {
      messages.append("Dealer wins")
      resetButtons();
    } else if (parseInt(dealerPoints.innerHTML) == parseInt(playerPoints.innerHTML)) {
      messages.append("Tie")
      resetButtons();
    } else if (parseInt(dealerPoints.innerHTML) < parseInt(playerPoints.innerHTML)) {
      messages.append("Player wins")
      resetButtons();
    } else {
      messages.append("Player wins")
      resetButtons();
    }
  } else {
    messages.append("Player wins");
    resetButtons();
  }
}

// ** Disable/Enable Buttons **
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

// ** Event listeners **
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
  console.log ("standing")
  stand();
})



// Joe hint: maybe run the code in the curly braces below
window.addEventListener("DOMContentLoaded", () => {

});
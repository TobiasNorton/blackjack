let playerHand = []

let dealerHand = []

let playerTotal = ''

let dealerTotal = ''

// This is our list of 52 cards
let cardDeck = [
  { face: '2', value: 2, suit: 'spades' },
  { face: '3', value: 3, suit: 'spades' },
  { face: '4', value: 4, suit: 'spades' },
  { face: '5', value: 5, suit: 'spades' },
  { face: '6', value: 6, suit: 'spades' },
  { face: '7', value: 7, suit: 'spades' },
  { face: '8', value: 8, suit: 'spades' },
  { face: '9', value: 9, suit: 'spades' },
  { face: '10', value: 10, suit: 'spades' },
  { face: 'jack', value: 10, suit: 'spades' },
  { face: 'queen', value: 10, suit: 'spades' },
  { face: 'king', value: 10, suit: 'spades' },
  { face: 'ace', value: 11, suit: 'spades' },
  { face: '2', value: 2, suit: 'hearts' },
  { face: '3', value: 3, suit: 'hearts' },
  { face: '4', value: 4, suit: 'hearts' },
  { face: '5', value: 5, suit: 'hearts' },
  { face: '6', value: 6, suit: 'hearts' },
  { face: '7', value: 7, suit: 'hearts' },
  { face: '8', value: 8, suit: 'hearts' },
  { face: '9', value: 9, suit: 'hearts' },
  { face: '10', value: 10, suit: 'hearts' },
  { face: 'jack', value: 10, suit: 'hearts' },
  { face: 'queen', value: 10, suit: 'hearts' },
  { face: 'king', value: 10, suit: 'hearts' },
  { face: 'ace', value: 11, suit: 'hearts' },
  { face: '2', value: 2, suit: 'clubs' },
  { face: '3', value: 3, suit: 'clubs' },
  { face: '4', value: 4, suit: 'clubs' },
  { face: '5', value: 5, suit: 'clubs' },
  { face: '6', value: 6, suit: 'clubs' },
  { face: '7', value: 7, suit: 'clubs' },
  { face: '8', value: 8, suit: 'clubs' },
  { face: '9', value: 9, suit: 'clubs' },
  { face: '10', value: 10, suit: 'clubs' },
  { face: 'jack', value: 10, suit: 'clubs' },
  { face: 'queen', value: 10, suit: 'clubs' },
  { face: 'king', value: 10, suit: 'clubs' },
  { face: 'ace', value: 11, suit: 'clubs' },
  { face: '2', value: 2, suit: 'diamonds' },
  { face: '3', value: 3, suit: 'diamonds' },
  { face: '4', value: 4, suit: 'diamonds' },
  { face: '5', value: 5, suit: 'diamonds' },
  { face: '6', value: 6, suit: 'diamonds' },
  { face: '7', value: 7, suit: 'diamonds' },
  { face: '8', value: 8, suit: 'diamonds' },
  { face: '9', value: 9, suit: 'diamonds' },
  { face: '10', value: 10, suit: 'diamonds' },
  { face: 'jack', value: 10, suit: 'diamonds' },
  { face: 'queen', value: 10, suit: 'diamonds' },
  { face: 'king', value: 10, suit: 'diamonds' },
  { face: 'ace', value: 11, suit: 'diamonds' }
]

// This code will build the deck dynamically
//
// // This will eventually be our deck of 52 cards
// let deck = []
//
// // A list of all the suits we have
// let suits = ['spades', 'hearts', 'clubs', 'diamonds']
//
// // The 13 cards that are in each suit
// let cards = [
//   { face: '2', value: 2 },
//   { face: '3', value: 3 },
//   { face: '4', value: 4 },
//   { face: '5', value: 5 },
//   { face: '6', value: 6 },
//   { face: '7', value: 7 },
//   { face: '8', value: 8 },
//   { face: '9', value: 9 },
//   { face: '10', value: 10 },
//   { face: 'jack', value: 10 },
//   { face: 'queen', value: 10 },
//   { face: 'king', value: 10 },
//   { face: 'ace', value: 11 }
// ]
//
// for (let index = 0; index < suits.length; index++) {
//   for (let cardIndex = 0; cardIndex < cards.length; cardIndex++) {
//     deck.push({
//       face: cards[cardIndex].face,
//       value: cards[cardIndex].value,
//       suit: suits[index]
//     })
//   }
// }

const dealCardToPlayer = () => {
  let playerHandList = document.querySelector('.player-hand')
  // - pop another card
  let card = cardDeck.pop()
  // - push it to the hand
  playerHand.push(card.value)
  // Add this card to the user interface by creating a new LI
  let newCardItem = document.createElement('li')
  // Make the text of the LI be the description of the card
  newCardItem.textContent = `The ${card.face} of ${card.suit}`
  // Append that LI to the UL
  playerHandList.appendChild(newCardItem)
  // Call function that gets total
  getPlayerTotal()
  //Get total by iterating over each card value and add it to the player's total
  // Add the values together
}

console.log(playerHand)

const getPlayerTotal = () => {
  for (let i = 0; i < playerHand.length; i++) {
    playerTotal += playerHand[i]
  }
}

console.log(playerTotal)
// if (playerTotal)

const dealCardToDealer = () => {
  let dealerHandList = document.querySelector('.dealer-hand')
  let card = cardDeck.pop()

  dealerHand.push(card.value)

  let newCardItem = document.createElement('li')

  newCardItem.textContent = `The ${card.face} of ${card.suit}`
  dealerHandList.appendChild(newCardItem)

  for (let i = 0; i < dealerHand.length; i++) {
    dealerTotal += dealerHand[i]
  }
  // console.log(dealerTotal)
}

const main = () => {
  // Shuffle the deck into a random order
  // Uses [Fisher–Yates shuffle](https://en.wikipedia.org/wiki/Fisher–Yates_shuffle)
  for (let index = 52 - 1; index > 1; index -= 1) {
    let otherIndex = Math.floor(Math.random() * index)

    let firstCard = cardDeck[index]
    let secondCard = cardDeck[otherIndex]

    cardDeck[index] = secondCard
    cardDeck[otherIndex] = firstCard
  }

  for (let count = 0; count < 2; count++) {
    1
    dealCardToPlayer()
  }

  const revealDealerCards = () => {
    for (let count = 0; count < 2; count++) {
      dealCardToDealer()
    }
  }

  // Find the hit button
  let hitButton = document.querySelector('.hit')
  // Add an event listener on 'click' that does:
  hitButton.addEventListener('click', dealCardToPlayer)

  // Find the stay button
  let stayButton = document.querySelector('.stay')
  // Add an avent listener on 'click' that...
  stayButton.addEventListener('click', revealDealerCards)
  // console.log(playerHand)
  // console.log(cardDeck)
}

document.addEventListener('DOMContentLoaded', main)

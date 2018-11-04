let playerHand = []

let dealerHand = []

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

const dealCardToPlayer = () => {
  let card = cardDeck.pop()
  playerHand.push(card)

  let playerHandList = document.querySelector('.player-hand')

  let newCardItem = document.createElement('div')

  let src = `./cards/${card.face}_of_${card.suit}.svg`
  let alt = `The ${card.face} of ${card.suit}`
  let newImage = document.createElement('img')
  newImage.src = src
  newImage.alt = alt
  newCardItem.appendChild(newImage)

  playerHandList.appendChild(newCardItem)

  let thePlayerTotal = getPlayerTotal()

  console.log(`The total of the player hand is ${thePlayerTotal}`)
  let playerTotalDisplay = document.querySelector('.player-total')
  playerTotalDisplay.textContent = `Total ${thePlayerTotal}`

  if (thePlayerTotal > 21) {
    console.log('Bust! Dealer Wins!')
    let gameResults = document.querySelector('.game-results')
    gameResults.textContent = 'Bust! Dealer Wins!'

    let hideHitButton = document.querySelector('.hit')
    hideHitButton.classList.add('hidden')

    let hideStayButton = document.querySelector('.stay')
    hideStayButton.classList.add('hidden')

    let showResetButton = document.querySelector('.reset')
    showResetButton.classList.remove('hidden')
  }
  if (thePlayerTotal === 21) {
    console.log('Blackjack! Player Wins')
    let gameResults = document.querySelector('.game-results')
    gameResults.textContent = 'Blackjack! You Win!'

    let hideHitButton = document.querySelector('.hit')
    hideHitButton.classList.add('hidden')

    let hideStayButton = document.querySelector('.stay')
    hideStayButton.classList.add('hidden')

    let showResetButton = document.querySelector('.reset')
    showResetButton.classList.remove('hidden')
  }
}

const getPlayerTotal = () => {
  let playerTotal = 0
  for (let i = 0; i < playerHand.length; i++) {
    let card = playerHand[i]
    playerTotal += card.value
  }
  return playerTotal
}

const dealCardToDealer = () => {
  let card = cardDeck.pop()
  dealerHand.push(card)

  let dealerHandList = document.querySelector('.dealer-hand')

  let newCardItem = document.createElement('div')

  let src = `./cards/${card.face}_of_${card.suit}.svg`
  let alt = `The ${card.face} of ${card.suit}`
  let newImage = document.createElement('img')
  newImage.src = src
  newImage.alt = alt
  newCardItem.appendChild(newImage)

  dealerHandList.appendChild(newCardItem)

  let theDealerTotal = getDealerTotal()
  console.log(`The dealer's total is ${theDealerTotal}`)

  let dealerTotalDisplay = document.querySelector('.dealer-total')
  dealerTotalDisplay.textContent = `Total ${theDealerTotal}`
}

const getDealerTotal = () => {
  let dealerTotal = 0
  for (let i = 0; i < dealerHand.length; i++) {
    let card = dealerHand[i]
    dealerTotal += card.value
  }
  return dealerTotal
}

const resetGame = () => {
  location.reload()
  console.log('Game Ready')
}

const main = () => {
  // Shuffle the deck into a random order
  // Uses [Fisher–Yates shuffle]
  for (let index = 52 - 1; index > 1; index -= 1) {
    let otherIndex = Math.floor(Math.random() * index)

    let firstCard = cardDeck[index]
    let secondCard = cardDeck[otherIndex]

    cardDeck[index] = secondCard
    cardDeck[otherIndex] = firstCard
  }

  for (let count = 0; count < 2; count++) {
    dealCardToPlayer()
  }

  const revealDealerCards = () => {
    let hideCardbackOne = document.querySelector('.cardback-one')
    hideCardbackOne.classList.add('hidden')

    let hideCardbackTwo = document.querySelector('.cardback-two')
    hideCardbackTwo.classList.add('hidden')

    while (getDealerTotal() < 17) {
      dealCardToDealer()
      if (getDealerTotal() >= 17 && getDealerTotal() === getPlayerTotal()) {
        console.log('Tie game!')
        let gameResults = document.querySelector('.game-results')
        gameResults.textContent = 'Tie Game!'

        let hideHitButton = document.querySelector('.hit')
        hideHitButton.classList.add('hidden')

        let hideStayButton = document.querySelector('.stay')
        hideStayButton.classList.add('hidden')

        let showResetButton = document.querySelector('.reset')
        showResetButton.classList.remove('hidden')
      }
      if (getDealerTotal() >= 17 && getDealerTotal() > getPlayerTotal()) {
        console.log('Dealer wins with a high score!')
        let gameResults = document.querySelector('.game-results')
        gameResults.textContent = 'Dealer Wins!'

        let hideHitButton = document.querySelector('.hit')
        hideHitButton.classList.add('hidden')

        let hideStayButton = document.querySelector('.stay')
        hideStayButton.classList.add('hidden')

        let showResetButton = document.querySelector('.reset')
        showResetButton.classList.remove('hidden')
      }
      if (getDealerTotal() >= 17 && getDealerTotal() < getPlayerTotal()) {
        console.log('Player wins with a high score!')
        let gameResults = document.querySelector('.game-results')
        gameResults.textContent = 'You win!'

        let hideHitButton = document.querySelector('.hit')
        hideHitButton.classList.add('hidden')

        let hideStayButton = document.querySelector('.stay')
        hideStayButton.classList.add('hidden')

        let showResetButton = document.querySelector('.reset')
        showResetButton.classList.remove('hidden')
      }

      if (getDealerTotal() > 21) {
        console.log('Dealer Busts! You Win!')
        let gameResults = document.querySelector('.game-results')
        gameResults.textContent = 'Dealer Busts! You Win!'

        let hideHitButton = document.querySelector('.hit')
        hideHitButton.classList.add('hidden')

        let hideStayButton = document.querySelector('.stay')
        hideStayButton.classList.add('hidden')

        let showResetButton = document.querySelector('.reset')
        showResetButton.classList.remove('hidden')
      }
      if (getDealerTotal() === 21) {
        console.log('Blackjack! Dealer wins!')
        let gameResults = document.querySelector('.game-results')
        gameResults.textContent = 'Blackjack! Dealer Wins!'

        let hideHitButton = document.querySelector('.hit')
        hideHitButton.classList.add('hidden')

        let hideStayButton = document.querySelector('.stay')
        hideStayButton.classList.add('hidden')

        let showResetButton = document.querySelector('.reset')
        showResetButton.classList.remove('hidden')
      }
    }
  }

  let hitButton = document.querySelector('.hit')
  hitButton.addEventListener('click', dealCardToPlayer)

  let stayButton = document.querySelector('.stay')
  stayButton.addEventListener('click', revealDealerCards)

  let resetButton = document.querySelector('.reset')
  resetButton.addEventListener('click', resetGame)
}

document.addEventListener('DOMContentLoaded', main)

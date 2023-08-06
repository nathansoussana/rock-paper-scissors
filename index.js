// Variables
let hands = ["🪨", "📄", "✂️"];
let playerOneHand;
let playerTwoHand;

// HTML Elements
let handsEl = document.getElementById("hands-el")
let resultEl = document.getElementById("result-el")
let playButton = document.getElementById("play-btn")

// Functions & Rules
function playRound() {
  playerOneHand = pickHand()
  playerTwoHand = pickHand()
  handsEl.textContent = showHands()
  resultEl.textContent = displayResult()
}

function pickHand() {
  let i = Math.floor(Math.random() * hands.length)
  return hands[i]
}

function showHands() {
  return `P1: ${playerOneHand}\nP2: ${playerTwoHand}`
}

function displayResult() {
  if (playerOneHand === "🪨") {
    if (playerTwoHand === "🪨") {
      return "Tie!"
    } else if (playerTwoHand === "📄") {
      return "P2 wins!"
    } else if (playerTwoHand === "✂️") {
      return "P1 wins!"
    }

  } else if (playerOneHand === "📄") {
    if (playerTwoHand === "🪨") {
      return "P1 wins!"
    } else if (playerTwoHand === "📄") {
      return "Tie!"
    } else if (playerTwoHand === "✂️") {
      return "P2 wins!"
    }

  } else if (playerOneHand === "✂️") {
    if (playerTwoHand === "🪨") {
      return "P2 wins!"
    } else if (playerTwoHand === "📄") {
      return "P1 wins!"
    } else if (playerTwoHand === "✂️") {
      return "Tie!"
    }
  }
}

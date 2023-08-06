// Variables
let hands = ["🪨", "📄", "✂️"];
let playerOneHand = pickHand();
let playerTwoHand = pickHand();

// Display
console.log(showHands())
console.log(result())

// Functions
function pickHand() {
  let i = Math.floor(Math.random() * hands.length)
  return hands[i]
}

function showHands() {
  return `P1: ${playerOneHand}\nP2: ${playerTwoHand}`
}

function result() {
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


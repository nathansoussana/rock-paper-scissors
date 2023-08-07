// Variables
let hands = ["🪨", "📄", "✂️"];
let playerOneHand;
let playerTwoHand;
let myScore = 0;
let computerScore = 0;

// HTML Elements
let handsEl = document.getElementById("hands-el");
let resultEl = document.getElementById("result-el");
let playBtn = document.getElementById("play-btn");
let resetBtn = document.getElementById("reset-btn");;
let myScoreEl = document.getElementById("my-score-el");
let computerScoreEl = document.getElementById("computer-score-el");

// Functions & Rules
function playRound() {
  playerOneHand = pickHand();
  playerTwoHand = pickHand();
  handsEl.textContent = showHands();
  resultEl.textContent = displayResult();
  addPoints();

  if (myScore >= 5 || computerScore >= 5) {
    playBtn.style.display = "none";
    resetBtn.style.display = "block";
  }
}

function pickHand() {
  let i = Math.floor(Math.random() * hands.length);
  return hands[i];
}

function showHands() {
  return `${playerOneHand} vs ${playerTwoHand}`;
}

function displayResult() {
  if (playerOneHand === "🪨") {
    if (playerTwoHand === "🪨") {
      return "Tie!";
    } else if (playerTwoHand === "📄") {
      return "Computer wins!";
    } else if (playerTwoHand === "✂️") {
      return "You win!";
    }

  } else if (playerOneHand === "📄") {
    if (playerTwoHand === "🪨") {
      return "You win!";
    } else if (playerTwoHand === "📄") {
      return "Tie!";
    } else if (playerTwoHand === "✂️") {
      return "Computer wins!";
    }

  } else if (playerOneHand === "✂️") {
    if (playerTwoHand === "🪨") {
      return "Computer wins!";
    } else if (playerTwoHand === "📄") {
      return "You win!";
    } else if (playerTwoHand === "✂️") {
      return "Tie!";
    }
  }
}

function addPoints() {
  if (displayResult() === "You win!") {
    myScore++;
    myScoreEl.textContent = `You: ${myScore}`;
    
  } else if (displayResult() === "Computer wins!") {
    computerScore++;
    computerScoreEl.textContent = `Computer: ${computerScore}`;
  }
}

function resetGame() {
  myScore = 0;
  computerScore = 0;

  myScoreEl.textContent = `You: ${myScore}`;
  computerScoreEl.textContent = `Computer: ${computerScore}`;

  resetBtn.style.display = "none";
  playBtn.style.display = "block";
}
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
let restartBtn = document.getElementById("restart-btn");;
let myScoreEl = document.getElementById("my-score-el");
let computerScoreEl = document.getElementById("computer-score-el");

// Functions & Rules
function playRound() {
  playerOneHand = pickHand();
  playerTwoHand = pickHand();
  handsEl.textContent = displayHands();
  resultEl.textContent = computeResult();
  addPoints();

  if (myScore >= 5 || computerScore >= 5) {
    playBtn.style.display = "none";
    restartBtn.style.display = "block";
  }
}

function pickHand() {
  let i = Math.floor(Math.random() * hands.length);
  return hands[i];
}

function displayHands() {
  return `${playerOneHand} vs ${playerTwoHand}`;
}

function computeResult() {
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
  if (computeResult() === "You win!") {
    myScore++;
    myScoreEl.textContent = `You: ${myScore}`;

  } else if (computeResult() === "Computer wins!") {
    computerScore++;
    computerScoreEl.textContent = `Computer: ${computerScore}`;
  }
}

function restartGame() {
  myScore = 0;
  computerScore = 0;

  myScoreEl.textContent = `You: ${myScore}`;
  computerScoreEl.textContent = `Computer: ${computerScore}`;

  restartBtn.style.display = "none";
  playBtn.style.display = "block";
}
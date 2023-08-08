// Variables
let hands = ["🪨", "📄", "✂️"];
let playerOneHand;
let playerTwoHand;
let myScore = 0;
let computerScore = 0;


// HTML Elements
let myHand = document.getElementById("my-hand");
let computerHand = document.getElementById("computer-hand");

let handsEl = document.getElementById("hands-el");
let resultEl = document.getElementById("result-el");

let rockBtn = document.getElementById("rock-btn");
let paperBtn = document.getElementById("paper-btn");
let scissorsBtn = document.getElementById("scissors-btn");

let playBtn = document.getElementById("play-btn");
let restartBtn = document.getElementById("restart-btn");;

let myScoreEl = document.getElementById("my-score-el");
let computerScoreEl = document.getElementById("computer-score-el");


// Functions & Rules
function pickRock() {
  playerOneHand = "🪨"
  playRound()
}
function pickPaper() {
  playerOneHand = "📄"
  playRound()
}
function pickScissors() {
  playerOneHand = "✂️"
  playRound()
}

function playRound() {
  computerChoice();
  displayHands();
  computeResult();
  addPoints();

  if (myScore >= 5 || computerScore >= 5) {
    rockBtn.style.display = "none";
    paperBtn.style.display = "none";
    scissorsBtn.style.display = "none";
    restartBtn.style.display = "block";
  }
}

function computerChoice() {
  let i = Math.floor(Math.random() * hands.length);
  playerTwoHand = hands[i];
  return playerTwoHand
}

function displayHands() {
  myHand.textContent = playerOneHand;
  computerHand.textContent = computerChoice();
  return `${playerOneHand} vs ${playerTwoHand}`;
}

function computeResult() {
  if (playerOneHand === "🪨") {
    if (playerTwoHand === "🪨") {
      return resultEl.textContent = "Tie!";
    } else if (playerTwoHand === "📄") {
      return resultEl.textContent = "Computer wins!";
    } else if (playerTwoHand === "✂️") {
      return resultEl.textContent = "You win!";
    }

  } else if (playerOneHand === "📄") {
    if (playerTwoHand === "🪨") {
      return resultEl.textContent = "You win!";
    } else if (playerTwoHand === "📄") {
      return resultEl.textContent = "Tie!";
    } else if (playerTwoHand === "✂️") {
      return resultEl.textContent = "Computer wins!";
    }

  } else if (playerOneHand === "✂️") {
    if (playerTwoHand === "🪨") {
      return resultEl.textContent = "Computer wins!";
    } else if (playerTwoHand === "📄") {
      return resultEl.textContent = "You win!";
    } else if (playerTwoHand === "✂️") {
      return resultEl.textContent = "Tie!";
    }
  }
}

function addPoints() {
  if (computeResult() === "You win!") {
    myScore++;
    myScoreEl.textContent = myScore;

  } else if (computeResult() === "Computer wins!") {
    computerScore++;
    computerScoreEl.textContent = computerScore;
  }
}

function restartGame() {
  myScore = 0;
  computerScore = 0;

  myScoreEl.textContent = myScore;
  computerScoreEl.textContent = computerScore;

  restartBtn.style.display = "none";
  rockBtn.style.display = "inline";
  paperBtn.style.display = "inline";
  scissorsBtn.style.display = "inline";
}
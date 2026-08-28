let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

// Display score on the page
updateScoreElement();

// If there is no score in local storage
// Default value
// Check if the score is null
/* if (score === null) {
        score = {
          wins: 0,
          losses: 0,
          ties: 0,
        };
      } */

function playGame(playerMove) {
  const computerMove = pickComputerMove();

  console.log("Computer picked: " + computerMove);

  let result = "";

  // Statement check: playerMove - scissors - paper - rock
  // Calculate the result
  if (playerMove === "scissors") {
    if (computerMove === "rock") {
      result = "You lose.";
    } else if (computerMove === "paper") {
      result = "You win.";
    } else if (computerMove === "scissors") {
      result = "Tie.";
    }
  } else if (playerMove === "paper") {
    if (computerMove === "rock") {
      result = "You win.";
    } else if (computerMove === "paper") {
      result = "Tie.";
    } else if (computerMove === "scissors") {
      result = "You lose.";
    }
  } else if (playerMove === "rock") {
    if (computerMove === "rock") {
      result = "Tie.";
    } else if (computerMove === "paper") {
      result = "You lose.";
    } else if (computerMove === "scissors") {
      result = "You win.";
    }
  }

  // Statement check result for updating the score
  if (result === "You win.") {
    score.wins += 1;
  } else if (result === "You lose.") {
    score.losses += 1;
  } else if (result === "Tie.") {
    score.ties += 1;
  }

  // Update and Save score in the local storage
  localStorage.setItem("score", JSON.stringify(score));

  // Update score on the page
  updateScoreElement();

  // Display result on the page
  document.querySelector(".js-result").innerHTML = result;

  // Display moves on the page
  document.querySelector(".js-moves").innerHTML =
    `You <img class="move-icon" src="./images/${playerMove}-emoji.png" alt="rock-emoji" /> <img class="move-icon" src="./images/${computerMove}-emoji.png" alt="scissors-emoji" /> Computer`;

  console.log("Result: " + result);
  console.log("Wins score: " + score.wins);
  console.log("Losses score: " + score.losses);
  console.log("Ties score: " + score.ties);
}

// Update score on the page functionality
function updateScoreElement() {
  document.querySelector(".js-score").innerHTML =
    `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function pickComputerMove() {
  const randomNumber = Math.random();

  let computerMove = "";

  // Statement check: randomNumber
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "scissors";
  }

  return computerMove;
}

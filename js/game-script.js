let roshambo = ["Rock", "Paper", "Scissors"];

let message = "";

let playerScore = 0;
let computerScore = 0;

let currentWinner = "";
let finalWinner = "";
let finalMessage = "";

let playerSelection = "";
let computerSelection = "";

const playerRockImg = "images/rock-left.png";
const playerPaperImg = "images/paper-left.png";
const playerScissorsImg = "images/scissors-left.png";
const cpuRockImg = "images/rock-right.png";
const cpuPaperImg = "images/paper-right.png";
const cpuScissorsImg = "images/scissors-right.png";
const questionMarkImg = "images/question-mark.png";

let playerChoice = "";
const buttons = document.querySelectorAll(".game-main-button");
const playerName = document.getElementById("player-name");
const playerScoreBoard = document.getElementById("player-score-board");
const cpuScoreBoard = document.getElementById("cpu-score-board");
const statusMessage = document.getElementById("status-message");
const statusBoard = document.getElementById("status-board");
const alertModal = document.getElementById("alert-modal");
const modalText = document.getElementById("modal-text");
const playAgain = document.getElementById("play-again");
const playerPick = document.getElementById("player-pick");
const cpuPick = document.getElementById("cpu-pick");
const playerPickContainer = document.getElementById("player-pick-container");
const cpuPickContainer = document.getElementById("cpu-pick-container");

playerName.textContent = localStorage.getItem("username");

playAgain.addEventListener("click", () => {
    alertModal.style.display = "none";
    computerScore = 0;
    playerScore = 0;

    playerScoreBoard.textContent = playerScore;
    cpuScoreBoard.textContent = computerScore;

    statusMessage.textContent = "ROSHAMBO!";

    playerPick.src = questionMarkImg;
    cpuPick.src = questionMarkImg;
});

for (const button of buttons) {
    button.addEventListener("click", () => {
        playerChoice = button.id;
        switch (playerChoice) {
            case "rock":
                playerSelection = "Rock";
                break;
            case "paper":
                playerSelection = "Paper";
                break;
            case "scissors":
                playerSelection = "Scissors";
                break;
        }
        getComputerChoice();
        playRound();
    });
}

function getComputerChoice() {
    computerSelection = roshambo[Math.floor(Math.random() * roshambo.length | 0)];
}

function score(winner) {
    switch (winner) {
        case "CPU":
            ++computerScore;
            checkWinner();
            scoreAnimation(winner);
            break;
        case "PLAYER":
            ++playerScore;
            checkWinner();
            scoreAnimation(winner);
            break;
        default:
            console.log("Error!");
    }
}

function checkWinner() {
    playerScoreBoard.textContent = playerScore;
    cpuScoreBoard.textContent = computerScore;

    if (computerScore === 5) {
        finalWinner = "CPU";
        winnerModal(`You LOSE! The winner is ${finalWinner}!`);
    }
    if (playerScore === 5) {
        finalWinner = "PLAYER";
        winnerModal(`You WIN! Congratulations ${finalWinner}!`);
    }
}

function scoreAnimation(winner) {
    switch (winner) {
        case "CPU":
            cpuScoreBoard.classList.remove("bounce-in");
            cpuScoreBoard.style.opacity = 0;
            setTimeout(() => {
                cpuScoreBoard.style.opacity = 1;
                cpuScoreBoard.classList.add("bounce-in");
            }, 100);
            break;
        case "PLAYER":
            playerScoreBoard.classList.remove("bounce-in");
            playerScoreBoard.style.opacity = 0;
            setTimeout(() => {
                playerScoreBoard.style.opacity = 1;
                playerScoreBoard.classList.add("bounce-in");
            }, 100);
            break;
        default:
            console.log("Error!");
    }
}

function statusBoardAnimation() {
    statusBoard.classList.remove("bounce-up");
    statusBoard.style.opacity = 0;
    setTimeout(() => {
        statusBoard.style.opacity = 1;
        statusBoard.classList.add("bounce-up");
    }, 100);
}

function pickAnimation() {
    playerPickContainer.classList.remove("bounce-in-left");
    
    playerPickContainer.classList.remove("bounce-in-left");
    playerPickContainer.style.opacity = 0;

    cpuPickContainer.classList.remove("bounce-in-right");
    cpuPickContainer.style.opacity = 0;
    setTimeout(() => {
        playerPickContainer.style.opacity = 1;
        playerPickContainer.classList.add("bounce-in-left");

        cpuPickContainer.style.opacity = 1;
        cpuPickContainer.classList.add("bounce-in-right");
    }, 100);
}

function winnerModal(message) {
    alertModal.style.display = "flex";
    modalText.textContent = message;
}

function playRound() {
    statusBoardAnimation();
    pickAnimation();
    const winText = "You Win!";
    const loseText = "You Lose!";
    playerSelection = playerSelection.charAt(playerSelection).toUpperCase().concat(playerSelection.slice(1).toLowerCase());

    if (playerSelection === "Rock") {
        playerPick.src = playerRockImg;

        switch (computerSelection) {
            case "Paper":
                message = loseText.concat(` ${computerSelection} beats ${playerSelection}!`);
                statusMessage.textContent = message.toUpperCase();
                currentWinner = "CPU";
                cpuPick.src = cpuPaperImg;
                score(currentWinner);
                break;
            case "Scissors":
                message = winText.concat(` ${playerSelection} beats ${computerSelection}!`);
                statusMessage.textContent = message.toUpperCase();
                currentWinner = "PLAYER";
                cpuPick.src = cpuScissorsImg;
                score(currentWinner);
                break;
            default:
                message = "It's a Draw! Both of you chose Rock!";
                statusMessage.textContent = message.toUpperCase();
                cpuPick.src = cpuRockImg;
        }
    } else if (playerSelection === "Paper") {
        playerPick.src = playerPaperImg;

        switch (computerSelection) {
            case "Scissors":
                message = loseText.concat(` ${computerSelection} beats ${playerSelection}!`);
                statusMessage.textContent = message.toUpperCase();
                currentWinner = "CPU";
                cpuPick.src = cpuScissorsImg;
                score(currentWinner);
                break;
            case "Rock":
                message = winText.concat(` ${playerSelection} beats ${computerSelection}!`);
                statusMessage.textContent = message.toUpperCase();
                currentWinner = "PLAYER";
                cpuPick.src = cpuRockImg;
                score(currentWinner);
                break;
            default:
                message = "It's a Draw! Both of you chose Paper!";
                statusMessage.textContent = message.toUpperCase();
                cpuPick.src = cpuPaperImg;
        }
    } else if (playerSelection === "Scissors") {
        playerPick.src = playerScissorsImg;

        switch (computerSelection) {
            case "Rock":
                message = loseText.concat(` ${computerSelection} beats ${playerSelection}!`);
                statusMessage.textContent = message.toUpperCase();
                currentWinner = "CPU";
                cpuPick.src = cpuRockImg;
                score(currentWinner);
                break;
            case "Paper":
                message = winText.concat(` ${playerSelection} beats ${computerSelection}!`);
                statusMessage.textContent = message.toUpperCase();
                currentWinner = "PLAYER";
                cpuPick.src = cpuPaperImg;
                score(currentWinner);
                break;
            default:
                message = "It's a Draw! Both of you chose Scissors!";
                statusMessage.textContent = message.toUpperCase();
                cpuPick.src = cpuScissorsImg;
        }
    } else {
        console.log("Error!");
    }


}
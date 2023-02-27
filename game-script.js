let roshambo = ["Rock", "Paper", "Scissors"];

let message = "";

let playerScore = 0;
let computerScore = 0;

let currentWinner = "";
let finalWinner = "";
let finalMessage = "";

let playerSelection = "";
let computerSelection = "";

let playerChoice = "";
const buttons = document.querySelectorAll(".btn");

for (const button of buttons) {
    button.addEventListener('click', () => {
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
            console.log(`CPU Score: ${computerScore} & PLAYER Score: ${playerScore}`);
            checkWinner();
            break;
        case "PLAYER":
            ++playerScore;
            console.log(`CPU Score: ${computerScore} & PLAYER Score: ${playerScore}`);
            checkWinner();
            break;
        default:
            console.log("Error!");
    }
}

function checkWinner() {
    if (computerScore === 5) {
        finalWinner = "CPU";
        alert(`You Lost! The winner is ${finalWinner}`);
        computerScore = 0;
        playerScore = 0;
    }
    if (playerScore === 5) {
        finalWinner = "PLAYER";
        alert(`You won! Congratulations ${finalWinner}!`);
        computerScore = 0;
        playerScore = 0;
    }
}

function playRound() {
    const winText = "You Win!";
    const loseText = "You Lose!";
    playerSelection = playerSelection.charAt(playerSelection).toUpperCase().concat(playerSelection.slice(1).toLowerCase());
    
    if (playerSelection === "Rock") {
        switch (computerSelection) {
            case "Paper":
                message = loseText.concat(` ${computerSelection} beats ${playerSelection}!`);
                console.log(message);
                currentWinner = "CPU";
                score(currentWinner);
                break;
            case "Scissors":
                message = winText.concat(` ${playerSelection} beats ${computerSelection}!`);
                console.log(message);
                currentWinner = "PLAYER";
                score(currentWinner);
                break;
            default:
                message = "It's a Draw! Both of you chose Rock!";
                console.log(message);
        }
    } else if (playerSelection === "Paper") {
        switch (computerSelection) {
            case "Scissors":
                message = loseText.concat(` ${computerSelection} beats ${playerSelection}!`);
                console.log(message);
                currentWinner = "CPU";
                score(currentWinner);
                break;
            case "Rock":
                message = winText.concat(` ${playerSelection} beats ${computerSelection}!`);
                console.log(message);
                currentWinner = "PLAYER";
                score(currentWinner);
                break;
            default:
                message = "It's a Draw! Both of you chose Paper!";
                console.log(message);
        }
    } else if (playerSelection === "Scissors") {
        switch (computerSelection) {
            case "Rock":
                message = loseText.concat(` ${computerSelection} beats ${playerSelection}!`);
                console.log(message);
                currentWinner = "CPU";
                score(currentWinner);
                break;
            case "Paper":
                message = winText.concat(` ${playerSelection} beats ${computerSelection}!`);
                console.log(message);
                currentWinner = "PLAYER";
                score(currentWinner);
                break;
            default:
                message = "It's a Draw! Both of you chose Scissors!";
                console.log(message);
        }
    } else {
        console.log("Error!");
    }
}
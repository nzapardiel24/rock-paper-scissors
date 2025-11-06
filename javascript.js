const winsAgainst = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper"
};
let humanScore = 0;
let computerScore = 0;

function randomIntBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getComputerChoice() {
   let i = randomIntBetween(1,3);
    if (i == 1) {
        return "rock";
    }
    else if (i == 2) {
        return "paper";
    }
    else if (i == 3) {
        return "scissors";
    }
}

function getHumanChoice() {
    return prompt("Rock, Paper, Scissors");
}

function playRound(humanChoice, computerChoice) {
    console.log(humanChoice);
    console.log(computerChoice);
    if (humanChoice === computerChoice) {
        console.log("Tie");
    }
    else if (winsAgainst[computerChoice] === humanChoice) {
        console.log("You lose");
        computerScore ++;
    }
    else {
        console.log("You win");
        humanScore ++;
    }
    console.log("Player: ", humanScore);
    console.log("Computer: ", computerScore);
}

function playGame() {
    for (let rounds = 0; rounds < 5; rounds++) {
        let humanChoice = getHumanChoice().toLowerCase();
        let computerChoice = getComputerChoice();        
        playRound(humanChoice, computerChoice);
    }
    if (humanScore > computerScore) {
        console.log ("You win the game");
    }
    else if (computerScore > humanScore) {
        console.log ("You lose the game!");
    }
    else {
        console.log ("The game is a tie!");
    }
}

playGame();
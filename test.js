function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "tie";
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        return "win";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "win";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        return "win";
    } else {
        return "lose";
    }
}

function playGame() {
    let count = 0;
    let c = 0;
    let p = 0;
    for (i = 0; i < 5; i++) {

        const playerSelection = prompt("Enter You Choice").toLowerCase();
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);

        console.log(result);
        if (result == "tie") {
            console.log("tie");
        } else if (result == "win") {
            console.log("you win");
            p = p + 1;
        } else if (result == "lose") {
            console.log("you lose");
            c = c + 1;
        }
    }
    if (p > c) {
        console.log("Winner")
    }else if(p<c) {
        console.log("Loser")
    }else{ console.log("Tie")}
}
playGame();
// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));

function computerChoice() {
    let choice = ['rock', 'papper', 'scissor']
    return choice[Math.floor(Math.random() * choice.length)];
}
function playgame() {
    w = 0;
    l = 0;
    t = 0;
    result = "";
    for (let i = 0; i < 5; i++) {
        let computerCh = computerChoice();
        let playerchoice = prompt("Enter Your Try").toLowerCase();
        if (playerchoice === 'rock' || playerchoice === 'papper' || playerchoice === 'scissor') {
            result = playround(computerCh, playerchoice)
            console.log(result)
            if (result === "Player win") {
                w++;

            }
            else if (result === "Computer win") {
                l++;


            }
            else if (result === "Tie") {
                t++;
            }
        }else{i--}
    }
    if (w > l) {
        console.log("You win")
    }
    else if (l > w) {
        console.log("You Lose")
    }
    else if (w == l) {
        console.log("Match Tie")
    }
}
playgame();
function playround(computerCh, playerchoice) {
    if (playerchoice == computerCh) {
        return ("Tie")
    }
    else if (playerchoice == 'rock' && computerCh == 'scissor') {
        return ("Player win")
    }
    else if (playerchoice == 'papper' && computerCh == 'rock') {
        return ("Player win")
    }
    else if (playerchoice == 'scissor' && computerCh == 'papper') {
        return ("Player win")
    }
    else {
        return ("Computer win")
    }
}


let computerChoice
let humanChoice

const body = document.querySelector("body");
const btnList = document.querySelector(".btn-list")
const score = document.querySelector(".score");
const result = document.querySelector(".result");

// Initialize

let computerScore = 0;
let humanScore = 0;
;

scoreUpdate();

btnList.addEventListener("click", (e) => {      
    playRound(e.target.id,getComputerChoice())
});

function scoreUpdate () {
    score.textContent = `Human score: ${humanScore} | Computer score ${computerScore}`;
};

function getComputerChoice() {
    let randomComputerNum = Math.floor(Math.random() * 3 + 1);
    switch(randomComputerNum) {
        case 1: computerChoice = "rock"; break;
        case 2: computerChoice = "paper"; break;
        case 3: computerChoice = "scissors"; break;
    }
    return computerChoice;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        result.textContent = `Draw! Both choose ${humanChoice}!`;
    }

    else if (   humanChoice == "rock" && computerChoice == "scissors" ||
                humanChoice == "paper" && computerChoice == "rock" ||
                humanChoice == "scissors" && computerChoice == "paper"
    ) {
        humanScore ++;
        result.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
    }

    else {
        computerScore ++;
        result.textContent = `You lost! ${computerChoice} beats ${humanChoice}.`;
    }
    scoreUpdate();

    checkGameEnd()

}
function checkGameEnd () {
    if (humanScore === 5 || computerScore === 5) {
        const gameResult = document.createElement("p");
        body.appendChild(gameResult);
        gameResult.textContent = `You've ${humanScore === 5 ? "won" : "lost"} the game! You get ${humanScore} match out of ${humanScore + computerScore}`;
        
        humanScore = 0;
        computerScore = 0;
        scoreUpdate();
        
        const restartBtn = document.createElement("button");
        restartBtn.textContent = "Restart";

        body.appendChild(restartBtn);
        restartBtn.addEventListener("click", () => {
            result.textContent = ""
            gameResult.remove();
            restartBtn.remove();
        })
    }
}

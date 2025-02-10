/*Computer randomly return "rock", "paper" or "scissors"
function getComputerChoice
use prompt to get user input getHumanChoice (case not sensitive)
humanScore computerScore
round winner announcement
“You lose! Paper beats Rock”
playRound as the function of single round
playGame call playRound 5 times

let computerChoice
let randomComputerNum
let humanChoice
let computerScore = 0
let humanScore = 0 */







/*
FUNCTION getComputerChoice()
    randomComputerNum = Round down (random number between 0-1 then times 3 plus 1)
    SWITCH(randomComputerNum)
        Case 1 rock 2 paper 3 scissors
    #RETURN computerChoice
# computerChoice assign (assigned in function scope)
*/

/*
FUNCTION getHumanChoice()
    DO
        humanChoice = toLowerCase (Prompt "Please enter your choice")
        IF humanChoice != rock #and humanChoice != paper #and humanChoice != scissors
            WhileKeepGoing = true
            print invalid input, please enter again
        ELSE WhileKeepGoing = false
            RETURN humanChoice
    WHILE(whileKeepGoing)
# humanChoice assign (assigned in function scope)
*/

/*
FUNCTION playRound()

    IF humanChoice == computerChoice
        print "draw"

    ELSE IF human and computer => rock $$ scissors || paper $$ rock || scissors $$ paper
        humanScore ++
        Print "You win! humanChoice beats computerChoice"

    ELSE
        computerScore ++
        print "You lost! computerChoice beat humanChoice"

*/

/* 
Modification
combine all above and pack it into a function playRound
Define two parameters for playRound: humanChoice and computerChoice

FUNCTION playRound()

    let computerChoice
    let randomComputerNum
    let humanChoice
    let computerScore = 0
    let humanScore = 0 
    

    IF humanChoice == computerChoice
        print "draw"

    ELSE IF human and computer => rock $$ scissors || paper $$ rock || scissors $$ paper
        humanScore ++
        Print "You win! humanChoice beats computerChoice"

    ELSE
        computerScore ++
        print "You lost! computerChoice beat humanChoice"

*/

let computerChoice
let humanChoice

const body = document.querySelector("body");
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const result = document.querySelector(".result");
const score = document.querySelector(".score");
let computerScore = 0
let humanScore = 0

score.textContent = `Human score: ${humanScore} | Computer score ${computerScore}`

rock.addEventListener("click", () => playRound("rock",getComputerChoice()));
paper.addEventListener("click", () => playRound("paper",getComputerChoice()));
scissors.addEventListener("click", () => playRound("scissors",getComputerChoice()));



function getComputerChoice() {
    let randomComputerNum = Math.floor(Math.random() * 3 + 1);
    switch(randomComputerNum) {
        case 1: computerChoice = "rock"; break;
        case 2: computerChoice = "paper"; break;
        case 3: computerChoice = "scissors"; break;
    }
    return computerChoice;
}


// function getHumanChoice() {
//     let whileKeepGoing = true
//     do {
//         humanChoice = (prompt("What is your choice?")).toLowerCase();
//         console.log(humanChoice)
//         if (humanChoice != "rock" && humanChoice != "paper" && humanChoice != "scissors") {
//             whileKeepGoing = true;
//             console.log("Please enter an valid input!");
//         }
//         else {
//             whileKeepGoing = false;
//             return humanChoice;
//         }
//     } while(whileKeepGoing);
// }



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
    score.textContent = `Human score: ${humanScore} | Computer score ${computerScore}`;

    gameEnd()

}
function gameEnd () {
    if (humanScore === 5 || computerScore === 5) {
        const gameResult = document.createElement("p");
        body.appendChild(gameResult);
        gameResult.textContent = `You've ${humanScore === 5 ? "won" : "lost"} the game! You get ${humanScore} match out of ${humanScore + computerScore}`

        humanScore = 0;
        computerScore = 0;
        
        const restartBtn = document.createElement("button");
        restartBtn.textContent = "Restart";
        body.appendChild(restartBtn);
        restartBtn.addEventListener("click", () => {
            result.textContent = ""
            score.textContent = `Human score: ${humanScore} | Computer score ${computerScore}`
        })
    }
}




// function playGame() {


//     for (gameCount = 1; gameCount <= 5; gameCount ++) {
//         function playRound(humanChoice, computerChoice) {
//             if (humanChoice == computerChoice) {
//                 console.log(`Draw! Both choose ${humanChoice}!`);
//             }
        
//             else if (   humanChoice == "rock" && computerChoice == "scissors" ||
//                         humanChoice == "paper" && computerChoice == "rock" ||
//                         humanChoice == "scissors" && computerChoice == "paper"
//             ) {
//                 humanScore ++;
//                 console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
//             }
        
//             else {
//                 computerScore ++;
//                 console.log(`You lost! ${computerChoice} beats ${humanChoice}.`);
//             }
//         }
//         computerChoice = getComputerChoice();
//         humanChoice = getHumanChoice();
//         playRound(humanChoice, computerChoice);
        
//     }
//     let result = (humanScore > computerScore)? "won" : "lost";
//     console.log(`You've ${result} the game! You get ${humanScore} match out of ${humanScore + computerScore}`)
// }


/*
FUNCTION playGame()
FOR gameCount = 1; gameCount <= 5; gameCount++
    let computerScore = 0
    let humanScore = 0

    FUNCTION playRound()

    IF humanChoice == computerChoice
        print "draw"

    ELSE IF human and computer => rock $$ scissors || paper $$ rock || scissors $$ paper
        humanScore ++
        Print "You win! humanChoice beats computerChoice"

    ELSE
        computerScore ++
        print "You lost! computerChoice beat humanChoice"

    }
    getComputerChoice()
    getHumanChoice()
    playRound()
Let result = (humanChoice > computerChoice) "won" : "lost"
print "You've won the game! You get 'n' match out of 5"
*/
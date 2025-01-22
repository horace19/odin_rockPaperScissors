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


let computerChoice
let randomComputerNum
let humanChoice
let computerScore = 0
let humanScore = 0
let whileKeepGoing = true

function getComputerChoice() {
    randomComputerNum = Math.floor(Math.random() * 3 + 1);
    switch(randomComputerNum) {
        case 1: computerChoice = "rock"; break;
        case 2: computerChoice = "paper"; break;
        case 3: computerChoice = "scissors"; break;
    }
    return computerChoice;
}
console.log(getComputerChoice());
/*
FUNCTION getComputerChoice()
    randomComputerNum = Round down (random number between 0-1 then times 3 plus 1)
    SWITCH(randomComputerNum)
        Case 1 rock 2 paper 3 scissors
    #RETURN computerChoice
*/

function getHumanChoice() {
    do {
        humanChoice = (prompt("What is your choice?")).toLowerCase();
        console.log(humanChoice)
        if (humanChoice != "rock" && humanChoice != "paper" && humanChoice != "scissors") {
            whileKeepGoing = true;
            console.log("Please enter an valid input!");
        }
        else {
            whileKeepGoing = false;
            return humanChoice;
        }
    } while(whileKeepGoing);
}
console.log(getHumanChoice());
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
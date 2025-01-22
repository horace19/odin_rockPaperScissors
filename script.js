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
let humanScore = 0

FUNCTION getComputerChoice()
    randomComputerNum = Round down (random number between 0-1 then times 3 plus 1)
    SWITCH(randomComputerNum)
        Case 1 rock 2 paper 3 scissors

FUNCTION getHumanChoice()
    humanChoice = toLowerCase (Prompt "Please enter your choice")
    IF humanChoice != rock || humanChoice != paper || humanChoice != scissors
        print invalid

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
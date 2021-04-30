//Player wins
// if player selects Rock and computer selects scissors- player wins
// if player selects Paper and computer selects Rock- player wins
// if player selects Scissors and computer selects Paper- player wins

//Draw
// if player selects Rock and computer selects Rock- draw
// if player selects Paper and computer selects Paper- draw
// if player selects Scissors and computer selects Scissors- draw

// Computer wins
// if player selects Rock and computer selects Paper- Computer wins
// if player selects Paper and computer selects Scissors- Computer wins
// if player selects Scisors and computer selects Rock- Computer wins

// Then convert that logic to code and console.log the result of the game.
let playerMove = "rock";
let computerMove = "paper";


if (playerMove===paper) {
    console.log("Computer chose scissors, you lose")
}  else if (playerMove===scissors) {
    console.log("Computer chose scissors, its a draw")
}   else if (playerMove===rock) {
    console.log("Computer chose scissors, you win")
}

let playerMove= "rock";
let computerMove= "paper" ;

if(playerMove===paper) {
    console.log("Computer chose paper, its a draw")
}    else if (playerMove===scissors) {
    console.log("Computer chose rock, you lose")
}   else if (playerMove===rock) {
    console.log ("Computer chose scissors, you win")
}

let playerMove= "paper" ;
let computerMove= "paper";

if (playerMove===paper) {
    console.log ("Computer chose scissors, you lose")
}   else if (playerMove===scissors) {
    console.log ("Computer chose paper, its a draw")
}   else if (playerMove===rock) {
    console.log ("Computer chose scissors, you win")
}

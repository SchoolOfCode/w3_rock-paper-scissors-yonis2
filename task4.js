let choice= ("rock", "paper", "scissors")
let computerChoice= Math.floor(Math.random() * choice)
let result= 0
let playerMove= prompt("rock,paper,or scissors?");
function getWinner(playerMove, computerMove) {
 if (playerMove=== rock && computerMove=== scissors) {
        result++;
 }   else if (playerMove=== rock && computerMove=== rock) {
        result;
 }   else if (playerMove=== rock && computerMove=== paper) {
        result--;
 }   else if (playerMove=== paper && computerMove=== rock) {
        result++;
 }   else if (playerMove=== paper && computerMove=== paper) {
        result--;
 }   else if (playerMove=== paper && computerMove=== scissors) {
        result;
 }   else if (playerMove=== scissors && computerMove=== rock) {
        result--;
 }   else if (playerMove=== scissors && computerMove=== paper) {
        result++;
 }   else if (playerMove=== scissors && computerMove=== scissors) {
        result;
 }
}
alert(result);
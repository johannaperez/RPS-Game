var player1;
var player2;

// TO TEST, SET VALUES OF PLAYER HERE
player1 = "rock"; // you can test your code by changing this to "paper" or "scissor"
player2 = "paper"; // you can test your code by changing this to "rock" or "scissor"

var winner;
if ( player1 === "rock" && player2 === "paper" ) {
    winner = "player2";
}
// write all the other player1 and player2 possibilities here
// OHTER IF STATEMENTS HERE
var winner;
if ( player1 === "rock" && player2 === "scissor" ) {
winner = "player1";
}
var winner; 
if ( player1 === "rock" && player2 === "rock" ) {
winner = "tie";
}
var winner;
if ( player1 === "paper" && player1 === "rock" ) {
winner = "player1";
} 
var winner;
if ( player1 === "paper" && player1 === "scissor" ) {
winner = "player2";
}
var winner;
if ( player1 === "paper" && player2 === "paper" ) {
winner = "tie";
} 
var winner;
if ( player1 === "scissor" && player2 === "rock" ) {
winner = "player2";
}
var winner;
if ( player1 === "scissor" && player2 === "paper" ) {
winner = "player1";
}
var winner;
if ( player1 === "scissor" && player2 === "scissor" ) {
winner = "tie";
}
// END

console.log( winner );

// FOOD FOR THOUGHT:
// how annoying is it that you have to go back and change your variables
// to see different outcomes??
// what could you do to the code to ensure that you could run our logic over and over?
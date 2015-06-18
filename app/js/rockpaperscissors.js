////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
	if (playerMove === computerMove) {
		winner = "tie";
		console.log("That's a tie!");
	} else if (playerMove === "rock" && computerMove === "paper") {
		winner = "computer";
		console.log("Oh no! Paper covers rock!");
	} else if (playerMove === "rock" && computerMove === "scissors") {
		winner = "player";
		console.log("Yes! Rock breaks scissors!");
	} else if (playerMove === "paper" && computerMove === "rock") {
		winner = "player";
		console.log("Yes! Paper covers rock!");
	} else if (playerMove === "paper" && computerMove === "scissors") {
		winner = "computer";
		console.log("Oh no! Scissors cuts paper!");
	} else if (playerMove === "scissors" && computerMove === "rock") {
		winner = 'computer';
		console.log("Oh no! Rock breaks scissors!");
	} else if (playerMove === "scissors" && computerMove === "paper") {
		winner = "player";
		console.log("Yes! Scissors cuts paper!");
	} else {
		console.log("Follow the rules! Please select either 'rock', 'paper', or 'scissors'.")
	}
    return winner;
}

function playToFive() {
    console.log("Hey, let's play rock-paper-scissors!");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
	while (playerWins < 5 && computerWins < 5) {
		var playerMove = getPlayerMove();
		var computerMove = getComputerMove();
		console.log("The Player chose " + playerMove + " while the Computer chose " + computerMove + ".");
		var winner = getWinner(playerMove,computerMove);
		if (winner === "player") {
			playerWins += 1;
			console.log("The player wins.");
		} else if (winner === "computer") {
			computerWins += 1;
			console.log("The computer wins.");
		} else if (winner === "tie") {
			console.log("Nobody wins.");
		}
		console.log("The current score is " + playerWins + " (Player) to " + computerWins + " (Computer) .");
	}
    return [playerWins, computerWins];
}

playToFive();
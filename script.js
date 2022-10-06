// Ask user to enter a selection
// Get the computer selection
// Logic loop to see the result from the two
// Return the result (winner)
// Ask to play again
// Keep track of score

let computerChoice;
let userChoice;

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    console.log(randomNumber);
    if(randomNumber === 1) {
        computerChoice = "Rock"
    } else if(randomNumber === 2) {
        computerChoice = "Paper"
    } else if(computerChoice === 3) {
        computerChoice = "Scissors"
    }

    computerChoiceDisplay.innerHTML = computerChoice
}

function getUserChoice() {
    let userChoice = prompt("Pick Your Weapon", '');
    userChoice.toLowerCase();
    userChoice.charAt(0).toUpperCase();
    if(userChoice === "Rock" || userChoice === "Paper" || userChoice === "Scissors") {
        function getOutcome() {
            //tie
              if(computerChoice === userChoice) {
                roundOutcome = 'Tie - Play Again...'
              }
            //user wins
              if(computerChoice === 'Rock' && userChoice === 'Paper') {
                roundOutcome = 'You Win!'
              }
              if(computerChoice === 'Paper' && userChoice === 'Scissors') {
                roundOutcome = 'You Win!'
              }
              if(computerChoice === 'Scissors' && userChoice === 'Rock') {
                roundOutcome = 'You Win!'
              }
            //computer wins
              if(computerChoice === 'Rock' && userChoice === 'Scissors') {
                roundOutcome = 'You Lose :('
              }
              if(computerChoice === 'Paper' && userChoice === 'Rock') {
                roundOutcome = 'You Lose :('
              }
              if(computerChoice === 'Scissors' && userChoice === 'Paper') {
                roundOutcome = 'You Lose :('
              }
              outcomeDisplay.innerHTML = roundOutcome
            }
    } else{
        outcomeDisplay.innerHTML = "Inout error. Please select Rock, Paper, or Scissors"
    }
}
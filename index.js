// Here we need to generate random numeber 

let randomNumbers = parseInt((Math.random()) * 100 + 1)

// grabbing those values 
const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHigh = document.querySelector('.lowOrHigh')

// keeping a track of the previous guesses as we want to display it
let prevGuess = [];

// keeping a track of the number of guesses used by the user
let numGuess = 1;

let playGame = true;


// logic 
function validateGuess(guess) {

}

function checkGuess(guess) {

}

function displayGuess(guess) {

}
function displayMessage(guess) {

}

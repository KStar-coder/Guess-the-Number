// Here we need to generate random numeber 

let randomNumbers = parseInt((Math.random()) * 100 + 1)
// console.log(randomNumbers)
// grabbing those values 
const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHigh = document.querySelector('.lowOrHigh')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p') // we need a paragraph 

// keeping a track of the previous guesses as we want to display it
let prevGuess = [];

// keeping a track of the number of guesses used by the user
let numGuess = 1;

let playGame = true;

// Do these things while the game is still ongoing
if (playGame) {
    // checking for the submission 
    submit.addEventListener('click', function (e) {
        // preventing default actions so that we can work on it
        e.preventDefault();
        const guess = parseInt(userInput.value);
        // now we need to validate the guess
        validateGuess(guess)
    });
}


// logic 
function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please enter a valid number')
    }
    else if (guess < 1) {
        alert('Please enter a number greater than 1')
    }
    else if (guess > 100) {
        alert('Please enter a number lesser than 100')
    }
    else {
        // pushing the guess in the prevGuess array
        prevGuess.push(guess)
        // checking if the user has exhausted the guesses 
        if (numGuess === 11) {
            displayGuess(guess);
            displayMessage(`Game Over. Random number was ${randomNumbers}`)
            endGame()
        }
        else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }

}

function checkGuess(guess) {
    if (guess === randomNumbers) {
        displayMessage(`Congratulations! You Guessed it Right!`)
        endGame()
    }
    else if (guess < randomNumbers) {
        displayMessage(`Number is too small`)
    }
    else {
        displayMessage('Number is too large')
    }
}

function displayGuess(guess) {
    userInput.value = '' // clearing the value for the next input 
    guessSlot.innerHTML += `${guess}, `
    numGuess++
    remaining.innerHTML = `${11 - numGuess} `
}
function displayMessage(message) {
    lowOrHigh.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
    userInput.value = '' // clearing the value for the next input

    // disabling the user from adding more values 
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}

function newGame() {
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function (e) {
        randomNumbers = parseInt(Math.random() * 100 + 1)
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numGuess} `
        userInput.removeAttribute('disabled')
        startOver.removeChild(prevGuess)
        playGame = true
    });
}



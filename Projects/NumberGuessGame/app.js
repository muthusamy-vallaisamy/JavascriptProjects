const minValue = 1;
const maxValue = 10;
let numberOfGuesses;
let correctValue;

//UI variables;

const lbleMinValue = document.getElementById('min-number');
const lbleMaxValue = document.getElementById('max-number');
const txtInputNumber = document.getElementById('txtInputNumber');
const inputForm = document.getElementById('inputForm');
const messageDiv = document.getElementById('message');
const btnRestart = document.getElementById('btnRestart');

//Event handlers

inputForm.addEventListener('submit', function (e) {
  let enteredValue = parseInt(txtInputNumber.value);
  if (isNaN(enteredValue) || enteredValue > maxValue || enteredValue < minValue) {
    showMessage(`Please enter a valid number between ${minValue} and ${maxValue} `, 'red');
  }
  else {
    if (enteredValue === correctValue) {
      showMessage('Correct value. YOU WON!!', 'green');
    }
    else {
      numberOfGuesses--;
      if (numberOfGuesses !== 0)
        showMessage(`Sorry! incorrect guess. You have ${numberOfGuesses} more guesses `, 'orange')
      else {
        showMessage(`No more guesses. You lost :(`, 'red');
        txtInputNumber.disabled = true;
      }
    }
  }
  e.preventDefault();
})
btnRestart.addEventListener('click', startGame);

startGame();
function startGame() {
  numberOfGuesses = 3;
  txtInputNumber.disabled = false;
  txtInputNumber.value = '';
  showMessage('');
  correctValue = genrateRandomValue(minValue, maxValue);
}

function genrateRandomValue(min, max) {
  return (Math.round(Math.random() * max) + 1) - (min - 1);
}

function showMessage(message, color) {
  messageDiv.textContent = message;
  messageDiv.style.color = color;
}
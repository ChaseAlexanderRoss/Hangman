
//----Guessing Word Array---//
var guessWord = []

//---------Input Box----------//
var button = document.querySelector('.button')
button.addEventListener('click', function() {
//I need the box to take a string of letters and push it into an array
var preGuess = document.querySelector('.input').value;
console.log(preGuess)
var guessWord = preGuess.split("")
console.log(guessWord)
})



//----Geussing Word Array---//
var guessWord = []

//---------Input Box----------//
var input = document.querySelector('.input')
input.addEventListener('click', function() {
//I need the box to take a string of letters and push it into an array
var guessWord = input.split(" ")
})

console.log(guessWord)
//---------Input Box----------//
var button = document.querySelector('.button')
button.addEventListener('click', function() {
//I need the box to take a string of letters and push it into an array [Done]
    var preGuess = document.querySelector('.input').value;
// console.log(preGuess)
    var guessWord = preGuess.split("")
// console.log(guessWord)
//---Creating the hangman stuff--//
    for (i=0; i<guessWord.length; i++){
        var div = document.createElement('div')
        div.className = 'underline'
        div.innerText = guessWord[i]
        document.querySelector('.letters').appendChild(div)
    }
})


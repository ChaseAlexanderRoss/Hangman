//-----First Input Box----------//
//I need the box to take a string of letters and push it into an array [Done]
var guessWord;
var unguessed;
var button = document.querySelector('.button')
button.addEventListener('click', function() {
    var preGuess = document.querySelector('.input').value;
    preGuess = preGuess.toUpperCase()
    guessWord = preGuess.split("")
    unguessed = new Array(guessWord.length)
    console.log(guessWord)
    var div = document.createElement('div')
    var us = '___'
    div.innerText = guessWord
    document.querySelector('.letters').appendChild(div)
    
    for (i = 0; i < guessWord.length; i++) {
        var p = document.createElement('p')
        unguessed[i] = us
        p.innerText = unguessed[i]
        document.querySelector('.answeredLetters').appendChild(p)
    }
    //---Turn the original input fields off and turn the new ones on---//
    document.querySelector('.letterButton').style.display = 'block'
    document.querySelector('.letterInput').style.display = 'block'
    document.querySelector('.input').style.display = 'none'
    document.querySelector('.button').style.display = 'none'

})
//--------Guessing Letter Inputs-----//
var change = 0 
var letterButton = document.querySelector('.letterButton')
letterButton.addEventListener('click', function() {
    var guess = document.querySelector('.letterInput').value;
    guess = guess.toUpperCase()
    //console.log(guess)
    for (i = 0; i < guessWord.length; i++) {
        if (guessWord[i] == guess) {
            change = change + 1
            unguessed[i] = guessWord[i]
        } else {
            console.log("you're bad")
        }
    }
})


//---Creating divs to hold each individual letter--//
// I don't think I need to do this anymore [later note, I was wrong, glad I kept this code tho] b/c w/ two arrays I can just move from one array to the other at i pos. Moving this to the bottom for now
    // for (i=0; i<guessWord.length; i++){
    //     var div = document.createElement('div')
    //     div.className = 'underline'
    //     div.innerText = guessWord[i]
    //     document.querySelector('.letters').appendChild(div)
    // }
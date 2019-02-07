//-----First Input Box----------//
//I need the box to take a string of letters and push it into an array [Done]
var button = document.querySelector('.button')
button.addEventListener('click', function() {
    var preGuess = document.querySelector('.input').value;
    preGuess = preGuess.toUpperCase()
    var guessWord = preGuess.split("")
//---Creating divs to hold each individual letter--//
    for (i=0; i<guessWord.length; i++){
        var div = document.createElement('div')
        div.className = 'underline'
        div.innerText = guessWord[i]
        document.querySelector('.letters').appendChild(div)
    }
//---Turn the original input fields off and turn the new ones on---//
    document.querySelector('.letterButton').style.display = 'block'
    document.querySelector('.letterInput').style.display = 'block'
    document.querySelector('.input').style.display = 'none'
    document.querySelector('.button').style.display = 'none'
})
//--------Guessing Letter Inputs-----//
var letterButton = document.querySelector('.letterButton')
letterButton.addEventListener('click', function() {
    var guess = document.querySelector('.letterInput').value;
    guess = guess.toUpperCase()
    console.log(guess)
})
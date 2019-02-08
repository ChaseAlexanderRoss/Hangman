var guessWord;
var unguessed;
var p;
var hangCounter;
var button = document.querySelector('.button')
button.addEventListener('click', function() {
    var preGuess = document.querySelector('.input').value;
    preGuess = preGuess.toUpperCase()
    guessWord = preGuess.split("")
    unguessed = new Array(guessWord.length)
    var div = document.createElement('div')
    var us = '___'
    div.innerText = guessWord
    document.querySelector('.letters').appendChild(div)
    
    for (i = 0; i < guessWord.length; i++) {
        var p = document.createElement('p')
        unguessed[i] = us
        p.innerText = unguessed[i]
        p.setAttribute('data-letter-index', i)
        document.querySelector('.answeredLetters').appendChild(p)
    }
    document.querySelector('.letterButton').style.display = 'block'
    document.querySelector('.letterInput').style.display = 'block'
    document.querySelector('.input').style.display = 'none'
    document.querySelector('.button').style.display = 'none'
})
var change = 0 
var hangCounter = 0
var correctGuess = [];
var incorrectGuess = [];
var letterButton = document.querySelector('.letterButton')
letterButton.addEventListener('click', function() {
    var guess = document.querySelector('.letterInput').value;
    guess = guess.toUpperCase()

    if(incorrectGuess.includes(guess)) {
        window.alert("You've already guessed that, try something else")
    } else {
    for (i = 0; i < guessWord.length; i++) {
        if (guessWord[i] == guess) {
            change++;
            unguessed[i] = guessWord[i]
            correctGuess.push(guess)
        } else {
            incorrectGuess.push(guess)
        }
        document.querySelector('.answeredLetters p[data-letter-index="' + i + '"]').innerText = unguessed[i]
    } 
     if (change != 0) {
        change = 0
    } else {
        hangCounter++
        if (hangCounter === 8){
            document.querySelector('.answeredLetters').style.display = 'none'
            document.querySelector('.letterInput').style.display = 'none'
            document.querySelector('.letterButton').style.display = 'none'
            document.querySelector('.yl').style.display = 'block'
        } else {}
        }
    }
})
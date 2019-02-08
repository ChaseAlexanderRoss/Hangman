//-----First Input Box----------//
//I need the box to take a string of letters and push it into an array [Done]
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
    console.log(guessWord)
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
    //---Turn the original input fields off and turn the new ones on---//
    document.querySelector('.letterButton').style.display = 'block'
    document.querySelector('.letterInput').style.display = 'block'
    document.querySelector('.input').style.display = 'none'
    document.querySelector('.button').style.display = 'none'

})
//--------Guessing Letter Inputs-----//
var change = 0 
var hangCounter = 0
var correctGuess = [];
var incorrectGuess = [];
var letterButton = document.querySelector('.letterButton')
letterButton.addEventListener('click', function() {
    var guess = document.querySelector('.letterInput').value;
    guess = guess.toUpperCase()
    console.log(incorrectGuess)    
    console.log(guess)    

    //console.log(guess)
    // if(guess == allGuess) {
    if(incorrectGuess.includes(guess)) {
        window.alert("You've already guessed that, try something else")
    } else {
    for (i = 0; i < guessWord.length; i++) {
        if (guessWord[i] == guess) {
            console.log('#', guessWord);
            change++;
            unguessed[i] = guessWord[i]
            correctGuess.push(guess)
            console.log(unguessed)
            console.log(correctGuess)
            // p.innerText = " " + unguessed[i]
            // document.querySelector('.answeredLetters').appendChild(p)
        } else {
            incorrectGuess.push(guess)
            console.log(incorrectGuess)
        }

        // console.log(document.querySelector('.answeredLetters p[data-letter-index="' + i + '"]'))
        // console.log(unguessed)
        // console.log(i)
        // console.log(unguessed[i])
        document.querySelector('.answeredLetters p[data-letter-index="' + i + '"]').innerText = unguessed[i]
    } 
     if (change != 0) {
        console.log('here')
        change = 0
    } else {
        hangCounter++
        console.log(hangCounter)
        if (hangCounter === 8){
            document.querySelector('.answeredLetters').style.display = 'none'
            document.querySelector('.letterInput').style.display = 'none'
            document.querySelector('.letterButton').style.display = 'none'
            document.querySelector('.yl').style.display = 'block'
        } else {
            console.log('no loss')
            }
        }
    }
})

//---Creating divs to hold each individual letter--//
// I don't think I need to do this anymore [later note, I was wrong, glad I kept this code tho]
    // for (i=0; i<guessWord.length; i++){
    //     var div = document.createElement('div')
    //     div.className = 'underline'
    //     div.innerText = guessWord[i]
    //     document.querySelector('.letters').appendChild(div)
    // }
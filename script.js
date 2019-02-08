//-----First Input Box----------//
//I need the box to take a string of letters and push it into an array [Done]
var guessWord;
var unguessed;
var p;
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
            console.log('#', guessWord);
            change++;
            unguessed[i] = guessWord[i]
            
        

            console.log(unguessed)
            /////////
            p.innerText = 'unguessed'

            for (i = 0; i < guessWord.length; i++) {

                // if (!unguessed[i]) {
                    // unguessed[i] = us
                // } 
                displayP.innerText += " " + unguessed[i]
                document.querySelector('.answeredLetters').appendChild(p)
            }
            //////////
        } else {
            console.log("you're bad")
            unguessed[i] = '___';
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
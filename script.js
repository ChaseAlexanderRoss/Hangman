//Declaring Variables
var guessWord;
var unguessed;
var p;
var hangCounter;
var change = 0;
var hangCounter = 0;
var correctGuess = [];
var incorrectGuess = [];
var button = document.querySelector('.button');
var letterButton = document.querySelector('.letterButton');

//This function exists to turn the word in question into an array, to create an "empty" array for players to see, and to link those things. It also makes the parts of the app used for guessing visible.
button.addEventListener('click', function() {
	//grabs the value put into the input box
	var preGuess = document.querySelector('.input').value;
	//makes it uppercase
	preGuess = preGuess.toUpperCase();
	//turns the word in question into an array of each letter
	guessWord = preGuess.split('');
	//Makes an array of equal length to the word in question
	unguessed = new Array(guessWord.length);
	//Makes a div
	var div = document.createElement('div');
	//the empty spaces for unguessed letters
	var us = '___';
	//Put the guessword into the div we just generated.
	div.innerText = guessWord;
	//make the div a child of the letters div
	document.querySelector('.letters').appendChild(div);
	//This for loop creates the part that people will see, it also assigns it a data value based on its position which makes it easier to find for later \.
	for (i = 0; i < guessWord.length; i++) {
		var p = document.createElement('p');
		unguessed[i] = us;
		p.innerText = unguessed[i];
		p.setAttribute('data-letter-index', i);
		document.querySelector('.answeredLetters').appendChild(p);
	}
	//Turns the stuff we don't need invisible and makes the stuff we do need visible
	document.querySelector('.letterButton').style.display = 'block';
	document.querySelector('.letterInput').style.display = 'block';
	document.querySelector('.input').style.display = 'none';
	document.querySelector('.button').style.display = 'none';
});

//This button works so that when you click it it makes the letters in the array visible if you guessed correctly, tells you you failed if you guess wrong, keeps track of all the letters guessed so far, and prevents you from guessing the same letter multiple times.

//The button in questino
letterButton.addEventListener('click', function() {
	//grabs the input value in the search bar
	var guess = document.querySelector('.letterInput').value;
	//makes it uppercase
	guess = guess.toUpperCase();
	//incorrect guess is also used to keep track of all the letters guessed, and used to prevent you from guessing the same letters again. so if incorrect guess includes a letter, then this if statement displays a block of text telling you to guess a different letter, and nothing else happens.
	if (incorrectGuess.includes(guess)) {
		document.querySelector('.ga').style.display = 'block';
	} else {
		//This turns off the guess again text incase it was on in the previous one.
		document.querySelector('.ga').style.display = 'none';
		//This is how we actually check the values of the array.
		for (i = 0; i < guessWord.length; i++) {
			//If the entered word's letter at position i == the guess entered
			if (guessWord[i] == guess) {
				//I'll explain this is a second
				change++;
				//Change the empty array position to the correct letter
				unguessed[i] = guessWord[i];
				//put the guess into an array of correctly guessed letters
				correctGuess.push(guess);
				//If every guess that goes through the array is false
			} else if ((incorrectGuess[i] = guess)) {
				//push the letter into the incorrect part
				incorrectGuess.push(guess);
			}
			//Actually updates the document, it goes here to make sure all the letters are correct
			document.querySelector('.answeredLetters p[data-letter-index="' + i + '"]').innerText = unguessed[i];
		}

		//If change != 0, then that means a letter was correctly guessed. So therefore there's no punishment. It resets the counter to 0 so that it will work on the next attempt
		if (change != 0) {
			change = 0;
			//This increases the actual "wrong guess" counter, but the hangcounter is cooler.
		} else {
			hangCounter++;
			//Basically if the hang counter is 8 you lose
			if (hangCounter === 8) {
				document.querySelector('.answeredLetters').style.display = 'none';
				document.querySelector('.letterInput').style.display = 'none';
				document.querySelector('.letterButton').style.display = 'none';
				document.querySelector('.hangCounter').style.display = 'none';
				document.querySelector('.yl').style.display = 'block';
				//Otherwise console log how many tries you have left.
			} else {
				hC = document.querySelector('.hangCounter');
				hC.innerText = `${8 - hangCounter} steps from Death`;
			}
		}
	}
	//For testing purposes
	console.log(incorrectGuess);
	console.log(correctGuess);
});

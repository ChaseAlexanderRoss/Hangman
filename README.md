Chase's Hangman Game:

Cited Sources:
Stole the whole //--Title for thing being worked on--// from the hangman example linked in the repo
I owe W3 schools my life
Ryan helps fill in the gaps and explains things like a human would 

Ok so I'm writing my own code based heavily on a major portion of this code from the example but I'm posting it here so I can prove I understand what it does before I make my own Franken-code out of it. "quotation marks" will be used to show my words vs stuff included in the text.

function SuccessfulLetterClick() {
    // Wipes counter for win state every iteration
    countWin = 0;
    // Styles letters after being clicked
    e.target.style.background = 'black';
    e.target.style.color = '#39ff14';
    // Checks if a clicked letter is in the answer array
    if (storedWord.indexOf(e.target.textContent) >= 0) {

    "Storedword is the var with the word we're guessing in it. .indexOf is used to show a specific index at which something can be seen, ie if you have an array with [1 2 3 4] in it and you did array.indexOf(2) it would return with [1] because thats the index pos at which 2 occurs for the first time. e.target.textContent is used to target the text we're comparing to, and compare it to the letter we've selected."

      for (i = 0; i < storedWord.length; i++) {
        if (storedWord[i] == e.target.textContent) {
            
            "if the letter in the array at value i equals the letter we've picked"
            
          // If yes display answer
          document.querySelectorAll('.answers')[i].value = e.target.textContent;
          console.log('Correct guess');

            Change the value of the div we've created for the answer to have the text in it."

        }
      }
    } else {
      // If no advance gallows counter
      gallowsCounter++;
      console.log('Bad guess');

        "increases the hangman counter if the letter doesn't match"

    }
    // Adds number of blank spaces left to var countWin
    document.querySelectorAll('.answers').forEach(function(e) {
      if (e.value == '') {
        countWin++;
        return;

        "This is just keeping track of what is still necessary to win"

I didn't copy and paste anything but I am using this as a basis for my code, I think I understand it now, and I'm understanding more this code in general. All of this is taken from the example linked in the repo

Problems:
I cannot for the life of me figure out how to make my array update to the page
I can update the arrays no problem, I can maintain structure just fine, but getting that thing on the page is just not happening

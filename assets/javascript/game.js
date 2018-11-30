$(document).ready(function() {
  var compChoices = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ];
  var compGuess = compChoices[Math.floor(Math.random() * compChoices.length)];
  var wins = 0;
  var losses = 0;
  var guessesLeft = 9;
  var listOfGuesses = [];
  var count = 0;
  var found = false;

  document.onkeyup = function(event) {
    var userGuess = event.key;
    // checks to see if the userGuess is inside the array listofGuesses, if it is the program won't proceed
    //the "break" command ends the loop
    if (listOfGuesses.includes(userGuess) && compChoices.includes(userGuess)) {
      found = true;
    } else {
      found = false;
      if (compChoices.includes(userGuess)) {
        if (userGuess === compGuess) {
          wins++;
          alert('You won!!!  The letter was: ' + compGuess);
          //reset
          guessesLeft = 9;
          compGuess =
            compChoices[Math.floor(Math.random() * compChoices.length)];
          listOfGuesses = [];
          $('#guesses').text('Your Guesses so far: ');
          count = 0;
        } else if (guessesLeft === 1) {
          losses++;
          alert('You lost!!!  The letter was: ' + compGuess);
          //reset
          guessesLeft = 9;
          compGuess =
            compChoices[Math.floor(Math.random() * compChoices.length)];
          listOfGuesses = [];
          $('#guesses').text('Your Guesses so far: ');
          count = 0;
        } else {
          guessesLeft--;
          //push letter to listOfGuesses
          listOfGuesses.push(userGuess);
        }
      }
    }

    var html = `<p>Wins: ${wins}</p>
      <p>Losses: ${losses}</p>
      <p>Guesses Left: ${guessesLeft}</p>`;
    document.querySelector('#game').innerHTML = html;
    // console.log(found);
    //this function takes the letters inside of listofGuesses and puts them in the html
    function consoleInside(arr) {
      if (!found && compChoices.includes(userGuess) && listOfGuesses[0]) {
        $('#guesses').append(arr[count] + ', ');
        count++;
      } else if (found) {
        return;
      }
    }
    consoleInside(listOfGuesses);
  };
  //don't code beneath this
});

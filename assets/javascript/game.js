var compChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var compGuess = compChoices[Math.floor(Math.random()*compChoices.length)];
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var listOfGuesses = [];


document.onkeyup = function () {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    var found = false; 
    
    // checks to see if the userGuess is inside the array listofGuesses, 
    //if it is the program won't proceed
    //the "break" command ends the loop
    for( var y = 0; y < listOfGuesses.length; y++){
        if (listOfGuesses[y] === userGuess) {
            found = true;
            break;
        } else {
            found = false;
        }
    }
      if (found === false) {

        if ((userGuess === "a") || (userGuess === "b") || (userGuess === "c") || (userGuess === "d") || (userGuess === "e") || (userGuess === "f") || (userGuess === "g") || (userGuess === "h") || (userGuess === "i") || (userGuess === "j") || (userGuess === "k") || (userGuess === "l") || (userGuess === "m") || (userGuess === "n") || (userGuess === "o") || (userGuess === "p") || (userGuess === "q") || (userGuess === "r") || (userGuess === "s") || (userGuess === "t") || (userGuess === "u") || (userGuess === "v") || (userGuess === "w") || (userGuess === "x") || (userGuess === "y") || (userGuess === "z")) {

            if (userGuess === compGuess) {
                wins++;
                alert("You won!!!  The letter was: " + compGuess);
                //reset
                guessesLeft = 9;
                compGuess = compChoices[Math.floor(Math.random()*compChoices.length)];
                listOfGuesses = [];
            
            } else if (guessesLeft === 0) {
                losses++;
                
                //reset
                guessesLeft = 9;
                compGuess = compChoices[Math.floor(Math.random()*compChoices.length)];
                listOfGuesses = [];
            
            } else {
                guessesLeft--;

                //push letter to listOfGuesses
                listOfGuesses.push(userGuess);            
            }
            
            //this function takes the letters inside of listofGuesses and puts them in the html
            function consoleInside(arr) {
                
                for ( var i = 0; i < arr.length; i++) {
                    document.querySelector("#guesses").innerHTML ="Your Guesses so far: " + arr;
                }
                
            }
            consoleInside(listOfGuesses);
            
            // console.log(listOfGuesses);
            // console.log(found);
            // console.log(userGuess);
            // console.log(compGuess);
        }
      }    

   var html =  "<p>Wins: " + wins + "</p>" +
                "<p>Losses: " + losses + "</p>" +
                "<p>Guesses Left: " + guessesLeft + "</p>"; 
                
    document.querySelector("#game").innerHTML = html;
}
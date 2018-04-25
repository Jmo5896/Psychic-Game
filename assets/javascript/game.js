var compChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var compGuess = compChoices[Math.floor(Math.random()*compChoices.length)];
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var listOfGuesses = [];


document.onkeydown = function () {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
      
    if ((userGuess === "a") || (userGuess === "b") || (userGuess === "c") || (userGuess === "d") || (userGuess === "e") || (userGuess === "f") || (userGuess === "g") || (userGuess === "h") || (userGuess === "i") || (userGuess === "j") || (userGuess === "k") || (userGuess === "l") || (userGuess === "m") || (userGuess === "n") || (userGuess === "o") || (userGuess === "p") || (userGuess === "q") || (userGuess === "r") || (userGuess === "s") || (userGuess === "t") || (userGuess === "u") || (userGuess === "v") || (userGuess === "w") || (userGuess === "x") || (userGuess === "y") || (userGuess === "z")) {

        if (userGuess === compGuess) {
            wins++;
            alert("You won sugar bear!!!  The letter was: " + compGuess);
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
        
        // function consoleInside(arr) {
        //     console.log("-------------");
            
        //     for ( var i = 0; i < arr.length; i++) {
        //         console.log(arr[i]);
        //     }
            
        //     console.log("-------------");
        // }

    // consoleInside(listOfGuesses);
    // console.log(guessesLeft);
    // console.log(userGuess);
    // console.log(compGuess);
    }

   var html =  "<p>Wins: " + wins + "</p>" +
                "<p>Losses: " + losses + "</p>" +
                "<p>Guesses Left: " + guessesLeft + "</p>" +
                "<p>Your Guesses so far: coming soon" + "</p>";
    document.querySelector("#game").innerHTML = html;
}
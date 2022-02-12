//INITIALIZING
let maxNumber = "";
let guessList = [];
let winningNumber = 0;
let chosenMax = document.getElementById("chosenMax");
let messageArea = document.getElementById("message");
let guessBtn = document.getElementById("guessBtn");
let $messageEffects =  $("#message");


//USER INPUT
maxNumber = prompt("What should the maximum number be?");

while (maxNumber == "" || isNaN(maxNumber) || maxNumber <= 2 ){
   maxNumber = prompt( maxNumber + " is invalid input. What should the maximum number be?");
}

chosenMax.innerHTML = maxNumber;

winningNumber = Math.floor(Math.random() * maxNumber) + 1;

console.log(winningNumber);

guessBtn.onclick = processGuess;


//FUNCTIONS
function processGuess() {

    let guess = Number(document.getElementById("guess").value);

    if(guess == winningNumber) {//Winner!!

        guessList.push(guess);
        updateMessage("You got it! It took you " + guessList.length + 
        " tries and your guesses were " + guessList);
        
    }
    else if(isNaN(guess)){
        
        updateMessage("That is not a number!");

    }
    else if(guess > maxNumber || guess <= 0){

        updateMessage("That number is not in range, try again.");

    }
    else if(guessList.includes(guess)){//if the number has already been guessed

        updateMessage("You already guessed " + guess + ". Try again.");

    }
    else if (guess > winningNumber) {

        guessList.push(guess);
        updateMessage("No, try a lower number.");

    }
    else { // if guess < winningNumber

        guessList.push(guess);
        updateMessage("No, try a higher number.");

    }

}

function updateMessage(newMessage){

    // jQuery for readability when there are duplicated messages
    $messageEffects.hide();
    messageArea.innerHTML = newMessage; 
    $messageEffects.fadeIn("fast");

}

const minNumber = 1;
const maxNumber = 100;
const maxTries = 7;

let secretNumber;
let triesLeft;
let gameEnded = false;

const messageElement = document.getElementById("message");
const guessInput = document.getElementById("guessInput");
const checkButton = document.getElementById("check");
const restartButton = document.getElementById("restart");

function generateSecretNumber() {
    return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
}

function showMessage(message) {
    messageElement.textContent = message;
}

function checkGuess() {
    if (gameEnded) {
        return;
    }

    const guess = parseInt(guessInput.value);

    if (isNaN(guess) || guess < minNumber || guess > maxNumber) {
        showMessage("Veuillez entrer un nombre valide entre 1 et 100.");
        return;
    }

    triesLeft--;

    if (guess === secretNumber) {
        showMessage(`GG ! Vous avez deviné le nombre en ${maxTries - triesLeft} essais.`);
        endGame();
    } else if (triesLeft === 0) {
        showMessage(`Perdu, vous avez utilisé tous vos essais. Le nombre correct était ${secretNumber}.`);
        endGame();
    } else if (guess < secretNumber) {
        showMessage("Le nombre cible est plus grand.");
    } else {
        showMessage("Le nombre cible est plus petit.");
    }

    guessInput.value = "";

    if (!gameEnded) {
        guessInput.focus();
    }
}

function endGame() {
    gameEnded = true;
    checkButton.disabled = true;
    guessInput.disabled = true;
    restartButton.style.display = "block";
}

function restartGame() {
    secretNumber = generateSecretNumber();
    triesLeft = maxTries;
    gameEnded = false;
    showMessage("");
    guessInput.value = "";
    guessInput.disabled = false;
    checkButton.disabled = false;
    restartButton.style.textAlign = "center"
    restartButton.style.display = "none";
    guessInput.focus();
}

secretNumber = generateSecretNumber();
triesLeft = maxTries;

checkButton.addEventListener("click", checkGuess);
restartButton.addEventListener("click", restartGame);

guessInput.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        checkGuess();
    }
});

guessInput.focus();

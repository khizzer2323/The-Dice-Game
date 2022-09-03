

function dice() {
    var randomNumber1 = Math.floor(Math.random() * 6 + 1);
    var randomImage1 = "images/dice" + randomNumber1 + ".png";
    document.querySelector('.player1').setAttribute('src', randomImage1);
    var randomNumber2 = Math.floor(Math.random() * 6 + 1);
    var randomImage2 = 'images/dice' + randomNumber2 + ".png";
    document.querySelector('.player2').setAttribute('src', randomImage2);
    document.querySelector('.again').textContent = 'Play Again';

    //Conditions for game............................

    if (randomNumber1 > randomNumber2) {
        document.querySelector('h2').textContent = '🏳️ Player 1 Won!';
    }
    else if (randomNumber2 > randomNumber1) {

        document.querySelector('h2').textContent = ' Player 2 Won! 🏳️';
    }
    else if (randomNumber2 = randomNumber1) {
        document.querySelector('h2').textContent = '🚩 Draw';
    }
}
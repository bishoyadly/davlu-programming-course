let secretNumber = Math.floor(Math.random() * 20 + 1);
let score = 5;
let highscore = 0;

document.querySelector('.score').textContent = score;
let message = document.querySelector('.message');

console.log('secret number is : ', secretNumber);

let checkButton = document.querySelector(".btn.check");

checkButton.addEventListener("click", function () {

    let guessedNumber = parseInt(document.querySelector(".guess").value);
    console.log('guessed number is :', guessedNumber);

    if (isNaN(guessedNumber)) {
        message.textContent = '⛔️ No number!';
    }

    if (guessedNumber == secretNumber) {
        highscore += score;
        message.textContent = '🎉 Correct Number!';
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.highscore').textContent = highscore;
    } else {
        if (score > 1) {

            if (guessedNumber > secretNumber) {
                score--;
                document.querySelector('.score').textContent = score;
                message.textContent = '📈 Too high!';
            }

            else if (guessedNumber < secretNumber) {
                score--;
                document.querySelector('.score').textContent = score;
                message.textContent = '📉 Too low!';
            }

        } else {
            message.textContent = '💥 You lost the game!';
            document.querySelector('.score').textContent = 0;
        }
    }

});


let againButton = document.querySelector('.again');

againButton.addEventListener('click', function () {

    secretNumber = Math.floor(Math.random() * 20 + 1);
    console.log('new secret number is : ', secretNumber);
    document.querySelector('body').style.backgroundColor = '#222';
    message.textContent = 'Start guessing...';
    score = 5;
    document.querySelector('.score').textContent = 5;

});
let secretNumber = Math.floor(Math.random() * 20) + 1;

console.log('computer selected number is : ', secretNumber);

let checkButton = document.querySelector('.btn.check');
let message = document.querySelector('.message');
let againButton = document.querySelector('.again');

checkButton.addEventListener('click', function () {
    let guessedNumber = Number(document.querySelector('.guess').value);
    console.log('guess number is : ', guessedNumber);

    if (guessedNumber == 0) {
        message.textContent = '⛔️ No number!';
    }
    else if (guessedNumber > secretNumber) {
        message.textContent = '📈 Too high!';
    } else if (guessedNumber < secretNumber) {
        message.textContent = '📉 Too low!';
    } else {
        message.textContent = '🎉 Correct Number!';
        document.querySelector('body').style.backgroundColor = '#60b347';
    }
});

againButton.addEventListener('click', function () {
    secretNumber = Math.floor(Math.random() * 20) + 1;
    console.log('computer selected number is : ', secretNumber);
    message.textContent = 'Start guessing...';
});
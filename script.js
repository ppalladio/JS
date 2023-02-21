'use strict';

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
//#delete later

document.querySelector('.check').addEventListener('click', (_e) => {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);
    if (!guess) {
        document.querySelector('.message').textContent = 'No Number';
    }
    //@when the guess is too high
    else if (guess > number) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too High';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You Lost';
            document.querySelector('.number').textContent = 0;
        }
    }
    //:when the guess is too low
    else if (guess < number) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too Low';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You Lost';
            document.querySelector('.number').textContent = 0;
        }
    }
    // :correct answer
    else {
        document.querySelector('.message').textContent = 'Correct';
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = number;

		if (score > highscore)
		{
            highscore = score;
			document.querySelector('.highscore').textContent = highscore;

        }
    }
});

//@reset

document.querySelector('.again').addEventListener('click', (_e) => {
    score = 20;
    number = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.score').textContent = 20;
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
});

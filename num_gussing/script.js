'use strict';

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMsg = (msg) => {
    document.querySelector('.message').textContent = msg;
};
const bgColor = (color) => {
    document.querySelector('body').style.backgroundColor = color;
};

const scoreEl = document.querySelector('.score');
const numberEl = document.querySelector('.number');

//#delete later

document.querySelector('.check').addEventListener('click', (_e) => {
    const guess = Number(document.querySelector('.guess').value);
    if (!guess) {
        displayMsg('No Number');
    }
    //@ refacctoring
    else if (guess !== number) {
        if (score > 1) {
            displayMsg(guess > number ? 'Too High' : 'Too Low');
            score--;
            scoreEl.textContent = score;
        } else {
            displayMsg('You Lost');
            numberEl.textContent = 0;
        }
    }

    // :correct answer
    else {
        displayMsg('Correct');
        bgColor('#60b347');
        numberEl.style.width = '30rem';
        numberEl.textContent = number;

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }
});

//@reset

document.querySelector('.again').addEventListener('click', (_e) => {
    score = 20;
    number = Math.trunc(Math.random() * 20) + 1;
    displayMsg('Start guessing...');
    bgColor('#222');
    scoreEl.textContent = 20;
    numberEl.style.width = '15rem';
    numberEl.textContent = '?';
    document.querySelector('.guess').value = '';
});

'use strict';

const number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
//#delete later

const guess = document.querySelector('.guess').value;

document.querySelector('.check').addEventListener('click', (_e) => {
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
    }
});

//@reset

document.querySelector('.again').addEventListener('click', (_e) => {
    score = 20;
    number = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.body').style.backgroundColor = '#222';
    document.querySelector('.score').textContent = 20;
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('number').textContent = '?';
    document.querySelector('.guess').value = '';
});

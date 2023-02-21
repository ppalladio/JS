'use strict';

const number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.number').textContent = number; //#delete later

const guess = document.querySelector('.guess').value;

document.querySelector('.check').addEventListener('click', (_e) => {
    if (!guess) {
        document.querySelector('.message').textContent = 'No Number';
    } else if (guess > number) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too High';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You Lost';
        }
    } else if (guess < number) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too Low';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You Lost';
        }
    } else {
        document.querySelector('.message').textContent = 'Correct';
    }
});

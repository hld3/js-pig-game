'use strict';

// elements
const playerZeroEl = document.querySelector('.player--0');
const playerOneEl = document.querySelector('.player--1');
const scoreZeroEl = document.querySelector('#score--0');
const scoreOneEl = document.querySelector('#score--1');

const diceDisplayEl = document.querySelector('.dice');
const btnNewGame = document.querySelector('.btn--new');
const btnRollDice = document.querySelector('.btn--roll');
const btnHoldScore = document.querySelector('.btn--hold')

// game start conditions
scoreZeroEl.textContent = 0;
scoreOneEl.textContent = 0;
diceDisplayEl.classList.add('hidden');

const totalScores = [0, 0];
let activePlayer = 0;
let currentScore = 0;

btnRollDice.addEventListener('click', function() {
    const diceRoll = Math.trunc(Math.random() * 6 + 1);

    diceDisplayEl.classList.remove('hidden');
    diceDisplayEl.src = `dice-${diceRoll}.png`;

    if(diceRoll !== 1) {
        currentScore += diceRoll;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    } else {
        currentScore = 0;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        activePlayer = activePlayer === 0 ? 1 : 0;
        playerZeroEl.classList.toggle('player--active');
        playerOneEl.classList.toggle('player--active');
    }
})
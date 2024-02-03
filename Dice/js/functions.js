"use strict";

const roll = () => {
    return Math.floor(Math.random() * 6) + 1;
};

const updateDiceImage = (result) => {
    const diceDiv = document.getElementById('dice');
    const diceImage = diceDiv.querySelector('img');
    const resultText = diceDiv.querySelector('#resultText')
    
    diceImage.src = `./img/${result}.png`;
    resultText.textContent = `Rolled: ${result}`;
};

const dice = document.getElementById('dice');
dice.addEventListener('click', () => {
    const result = roll();
    updateDiceImage(result);
});

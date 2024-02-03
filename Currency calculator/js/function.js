'use strict'

const button = document.getElementById('calculate')

const calculate = () => {
    const sek = document.getElementById('sek').value
    const result = sek * 0.0875
    const eur = document.getElementById('eur')
    eur.innerHTML = result.toFixed(2)
}

button.addEventListener('click',calculate)
"use strict";

const isPrime = (num) => {
    if (num < 2) return false
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false
    }
    return true
}




 const generatePrimeNumberAfterDelayAsync = (min, max) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           const num = Math.floor(Math.random() * (max - min + 1) + min)
            console.log(num)
            if (isPrime(num)) resolve(`Success! Prime number: ${num}`)
            else reject(`Error! The number ${num} is not prime.`)
        }, 1000)
    })
}

document.getElementById('button-result').addEventListener('click', () => {
    const min = +document.getElementById('input-min').value;
    const max = +document.getElementById('input-max').value;
    const result = document.getElementById('result')
    generatePrimeNumberAfterDelayAsync(min,max).then(res => alert(res)).catch(err =>(alert(err)))
})


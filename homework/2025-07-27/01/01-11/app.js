'use strict';
const getRandomNumberAfterDelay = (first, last, callback) => {
    setTimeout(() => {
        let num;
        do {
            num = Math.floor(Math.random() * (last - first + 1)) + first;
        } while (num % 2 !== 0);
        callback(num);
    }, 5000);
};

document.getElementById("number").addEventListener('click', () => {
    getRandomNumberAfterDelay(5, 10, (num) => {
        alert(`random number: ${num}`);
    });
});
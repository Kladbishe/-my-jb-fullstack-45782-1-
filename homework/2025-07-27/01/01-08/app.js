'use strict';
const getRandomNumberAfterDelay = (callback) => {
    setTimeout(() => {
        const num = Math.floor(Math.random() * 101)
        callback(num)
    }, 5000)
}
document.getElementById("number").addEventListener('click', () => {
    getRandomNumberAfterDelay((num) => {
        alert(`random number: ${num}`);
    });
});
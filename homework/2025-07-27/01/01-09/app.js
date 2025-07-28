'use strict';
const getRandomNumberAfterDelay = (limit, callback) => {
    setTimeout(() => {
        const num = Math.floor(Math.random() * limit + 1)
        callback(num)
    }, 5000)
}
document.getElementById("number").addEventListener('click', () => {
    getRandomNumberAfterDelay(100, (num) => {
        alert(`random number ${num}`);
    })
})
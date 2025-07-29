

(() => {
    const numbers = [3, 8, 16, 25, 42, 88, 99]
    const getSquareValuePromise = num => new Promise((resolve, reject) => {
        setTimeout(() => {
            if (num % 7 === 0) reject("error");
            else resolve(num ** 2);
        }, 3000);
    });
    Promise.allSettled(numbers.map(getSquareValuePromise))
        .then(console.log)
        .catch(console.error)
})();

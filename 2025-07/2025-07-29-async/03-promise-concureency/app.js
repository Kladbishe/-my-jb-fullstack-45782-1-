

(() => {
    const numbers = [3, 8, 16]
    const getSquareValuePromise = num => new Promise((resolve, reject) => {
        setTimeout(() => {
            if (num % 7 === 0) reject("error");
            else resolve(num ** 2);
        }, 3000);
    });
    Promise.all([
        getSquareValuePromise(numbers[0]),
        getSquareValuePromise(numbers[1]),
        getSquareValuePromise(numbers[2])
    ])
        .then(console.log)
        .catch(console.error);
})();

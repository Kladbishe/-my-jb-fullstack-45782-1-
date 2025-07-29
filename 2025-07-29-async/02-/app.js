

(() => {
    const getSquareValuePromise = num => new Promise((resolve, reject) => {
        setTimeout(() => {
            if (num % 7 === 0) reject("error");
            else resolve(num ** 2);
        }, 1000);
    });

    getSquareValuePromise(14)
        .then(console.log)       
        .catch(console.error);
})();

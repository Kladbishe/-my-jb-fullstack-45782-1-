function areAllPrimes(array) {
    for (const num of array) {
        if (num <= 1) return false;
        for (let i = 2; i <= num; i++) {
            if (num % i === 0) return false;
        }

    }
    return true
}
document.write(`${areAllPrimes([2, 3, 5, 7, 11])}`)
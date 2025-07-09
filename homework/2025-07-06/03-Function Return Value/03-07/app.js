function getMaxFromMatrix(matrix) {
    let max = -Infinity;
    for (let array of matrix) {
        for (let num of array) {
            if (num > max) max = num
        }
    }
    return max;
}

document.write(`${getMaxFromMatrix([
    [2, 5, 9],
    [4, 3, 8],
    [1, 6, 7]
])}`);
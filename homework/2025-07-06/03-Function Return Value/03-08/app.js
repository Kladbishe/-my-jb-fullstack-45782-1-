function getAverageFromMatrix(matrix) {
    let sum= 0;
    let length = 0;
    for (const array of matrix) {
        for (const num of array) {
            sum += num;
            length++
        }
    }
    return sum / length ;
}

document.write(`${getAverageFromMatrix([
    [2, 5, 9],
    [4, 3, 8],
    [1, 6, 7]
])}`);
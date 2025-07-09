function checkMultiplicationTable(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] !== (i + 1) * (j + 1)){
                return false
            }
        }
    }
    return true
}
const table = [
  [1, 2, 3],
  [2, 4, 6],
  [3, 6, 9]
];
document.write(checkMultiplicationTable(table))
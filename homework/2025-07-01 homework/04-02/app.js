 const multiplicationBoard = []
for(let i = 1; i <=10; i++){
    multiplicationBoard[i] = [];
    for(let j = 1; j <=10; j++){
        multiplicationBoard[i][j] = 0;
        multiplicationBoard[i][j] = i*j;
    }
}
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        document.write(`${multiplicationBoard[i][j]} `);
    }
    document.write(`<br>`);
}
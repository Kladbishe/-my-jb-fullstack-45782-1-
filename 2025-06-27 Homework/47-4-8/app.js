let n = +prompt('enter a number');

for (let row = 1; row <= n; row++) {
    let line = '';
    for (let col = 1; col <= row; col++) {
        line += col + ' ';
    }
    document.write(`${line}<br>`);
}
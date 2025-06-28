let n = +prompt('enter a number');

for (let row = n; row >= 1; row--) {
    for (let col = n; col >= 1; col--) {
        document.write(`${col}    `)
    }
    document.write(` <br>`)
}
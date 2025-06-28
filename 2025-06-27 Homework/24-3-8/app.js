const num = +prompt('enter a number');
for (let count = 1; count <= num; count++) {
    document.write(`${count} <br>`);
}
for (let count = num; count >= 1; count--) {
    document.write(`${count} <br>`);
}
num = +prompt('enter a number');
let star = '';

for (let count = 1; count <= num; count++) {
    star += '*';
    document.write(`${star} <br>`)
}

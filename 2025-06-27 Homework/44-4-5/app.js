num = +prompt('enter a number');
let star = '';

for (let count = 1; count <= num; count++) {
    star += '*';
}
for (let odd = 1; odd <= num; odd++) {
    document.write(`${star} <br>`)
}

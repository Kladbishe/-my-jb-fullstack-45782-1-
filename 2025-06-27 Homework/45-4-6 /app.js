width = +prompt('enter a width');
length = +prompt('enter a length');
let star = '';

for (let count = 1; count <= width; count++) {
    star += '*';
}
for (let odd = 1; odd <= length; odd++) {
    document.write(`${star} <br>`)
}

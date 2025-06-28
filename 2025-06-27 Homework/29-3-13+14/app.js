let first = +prompt('enter a number');
let last = +prompt('enter a number');
const num = +prompt('enter a number');
if (first > last) {
    let max = first
    first = last
    last = max
}
for (let count = first; count <= last; count++) {
    if(count%num === 0)
    document.write(`${count} <br>`)
}
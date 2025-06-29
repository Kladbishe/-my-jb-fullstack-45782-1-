let num = +prompt('enter a number');
while (num > 0) {
    for(let count = 1; count <= num; count++ ){
        document.write(`${count} <br>`);
    }
    num = +prompt('enter a number');
}
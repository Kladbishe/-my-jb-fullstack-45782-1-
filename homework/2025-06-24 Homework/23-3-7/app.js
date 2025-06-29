const num = +prompt('enter a number');
for( let count = 1; count<=num ; count++){
    if(count % 3 === 0){
        document.write(`${count} <br>`)
    }
}
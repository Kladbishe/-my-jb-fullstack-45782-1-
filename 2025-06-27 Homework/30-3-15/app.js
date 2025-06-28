let num = +prompt('enter a number');
while (num !== 0) {
    if (num % 7 === 0) {
        document.write(`${num} divides by 7<br> `);
        
    }
    else{
        document.write(`${num} does NOT divides by 7<br> `);
    }
    num = +prompt('enter a number');
}
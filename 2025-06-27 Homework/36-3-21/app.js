
let min=+prompt('enter a number') ;
for (let count = 2; count <= 10; count++) {
    let num = +prompt('enter a number');
    if(num<min){
        min = num
    }
}
document.write(`The smallest number is: ${min}`)
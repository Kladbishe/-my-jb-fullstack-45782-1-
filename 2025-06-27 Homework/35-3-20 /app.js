
let max=+prompt('enter a number') ;
for (let count = 2; count <= 10; count++) {
    let num = +prompt('enter a number');
    if(num>max){
        max = num
    }
}
document.write(`a big number this ${max}`)
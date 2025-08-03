const a = +prompt('enter a number');
const b = +prompt('enter a number');
function BoxStar(num1, num2) {
    for(let i = 1 ; i<=num1 ; i++){
        document.write(`<br>`)
        for(j=1; j<=num2; j++){
            document.write(`*`)
        }
    }
}
BoxStar(a,b)

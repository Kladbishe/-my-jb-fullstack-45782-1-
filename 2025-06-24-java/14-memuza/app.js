num =+prompt('enter number')
let sum = 0
let count = 0
while(num !=0){
    sum +=num
    count++
    num =+prompt('enter number')
    avg= sum/count
}
alert(` ${count === 0 ? 'can not calculate avergae without number' :sum/count}`);
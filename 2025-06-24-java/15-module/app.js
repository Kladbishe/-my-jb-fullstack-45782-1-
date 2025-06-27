num =+prompt('enter number')
let count=1
while(count <=num){

document.write(` ${ count % 7 ==0 ? "boom"  : count  }`);
count++
}
num=+prompt('enter a number')
num2=+prompt('enter a number')
num3=+prompt('enter a number')
document.write(`${num >= num2 && num >= num3 ? `number max: ${num}` :
  num2 >= num3 && num2 >= num ? `number max: ${num2}` :
    `max number: ${num3}`}`); 

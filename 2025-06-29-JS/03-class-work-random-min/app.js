min = +prompt('enter a min number');
max = +prompt('enter a max number');
const random = Math.random();
console.log(parseInt(random*(max-min+1)) + min);   

function generateRandomArray(num) {
    let array = [];
    for (let i = 1; i <= num; i++){
       let number =Math.floor(Math.random()*100)+1;
       array.push(number);
    }
    return array;
};
document.write(`array :${generateRandomArray(14)}`);
function averageArray(array) {
    let sum = 0;
    for(let num of array){
        sum += num
    }
   return sum/array.length
};
let avg1 = averageArray([10,20,30])
document.write(`average: ${avg1} <br>`);
let avg2 = averageArray([100,200,300])
document.write(`average: ${avg2} <br>`);
let avg3 = averageArray([1000,2000,3000])
document.write(`average: ${avg3} <br>`);
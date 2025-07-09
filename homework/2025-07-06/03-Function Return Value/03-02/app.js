function getMinValue(array) {
    let min= Infinity;
     for(let num of array){
        if(num<min) min = num
    }
    return min
   
};
let avg1 = getMinValue([10,1,30])
document.write(`min value: ${avg1} <br>`);
let avg2 = getMinValue([100,200,302120])
document.write(`min value: ${avg2} <br>`);
let avg3 = getMinValue([10010,202100,30100])
document.write(`min value: ${avg3} <br>`);
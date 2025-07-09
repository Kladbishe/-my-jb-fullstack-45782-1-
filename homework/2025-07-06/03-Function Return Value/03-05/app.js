function averageArray(array) {
    let sum = 0;
    for(let num of array){
        sum += num
    }
   return average = sum/array.length
};
function countAboveAverage(array){
    let count = 0;
    const average = averageArray(array)
    for(let num of array){
        if(num >= average) count++
    }
    return count

}

document.write(`Count: ${countAboveAverage([5,10,20,10,10,10,10,10,100,10,10,50])} <br>`);
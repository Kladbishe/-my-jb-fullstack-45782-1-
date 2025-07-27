"use strict";
(() => {
    const getAverage = numbers => {
        if (typeof numbers === "undefined") throw new Error("input must be defined")
        if (numbers === null) throw new Error("input must be null")
        if (!Array.isArray(numbers)) throw new Error("input must be n array")
        if (numbers.length === 0) throw new Error("array must not be empty")

       return numbers.reduce((cumulative, num) => cumulative + num, 0)/numbers.length
    }
document.getElementById("calcButton").addEventListener("click", ()=> {
    const size = +prompt('enter array size')
    const  number = []
    for(let i= 0; i <= size; i++){
        number.push(+prompt("enter a number"))
    }
     try {
        const average = getAverage(number)
    console.log(`average is ${average}`)} catch (e){
        alert(e.massage)
    }
})
})()
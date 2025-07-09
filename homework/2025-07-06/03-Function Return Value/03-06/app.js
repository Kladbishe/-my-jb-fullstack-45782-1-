function getMinIndex(array) {
    let min = Infinity;
    let index = 0;
    for (let num of array) {
        if (num < min) {
            min = num
            index = array.indexOf(num)

        }
    }
    return index

};
let avg1 = getMinIndex([10, 1, 30, 20, 30, 1])
document.write(`min value: ${avg1} <br>`);
let avg2 = getMinIndex([100, 20, 302120])
document.write(`min value: ${avg2} <br>`);
let avg3 = getMinIndex([10010, 202100, 30100])
document.write(`min value: ${avg3} <br>`);
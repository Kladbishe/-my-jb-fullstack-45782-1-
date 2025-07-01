const num = [];
let sum = 0;
evenNumbers = [];
everageNum = [];
oddNumbers = 0;
let average = 0;
for (let i = 1; i <= 100; i++) {
    num.push(parseInt(Math.random() * 100 + 1))
};
for (const nums of num) {
    document.write(` ${nums} |`)
    sum += nums;
};
document.write(`<br><br> sum : ${sum} <br>`);
document.write(`<br> revers: `)
for (let revers = num.length - 1; revers >= 0; revers--) {
    document.write(` ${num[revers]} |`)
};
average = sum / num.length
bEverage = 0;
let max = 0;
let min = 100
document.write(`<br> average : ${sum / num.length}`);
for (let nums of num) {
    if (nums % 2 === 0) {
        evenNumbers.push(nums);
    }
    else {
        oddNumbers += 1;
    }
    if (nums > max) max = nums
    if (nums < min) min = nums
    if (nums > average) everageNum.push(nums)
    if (nums < average) bEverage++

};

document.write(`<br><br>Even numbers:  ${evenNumbers} <br><br> Odd numbers: ${oddNumbers} <br>`);
document.write(`<br> max number: ${max} <br><br>`);
document.write(` minimal numeber: ${min} <br>`);
document.write(` <br> Numbers above average: ${everageNum} <br>`);
document.write(` <br> The number of values greater than the average:  ${bEverage} <br>`);




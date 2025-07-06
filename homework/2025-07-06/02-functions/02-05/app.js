function averageFor3Num(num1, num2, num3) {
    average = (num1 + num2 + num3) / 3
    document.write(`average for 3 number ${average} <br>`)
}
averageFor3Num(10, 20, 30);
averageFor3Num(+prompt("enter a number"), +prompt("enter a number"), +prompt("enter a number"))
averageFor3Num(Math.random(), Math.random(), Math.random())
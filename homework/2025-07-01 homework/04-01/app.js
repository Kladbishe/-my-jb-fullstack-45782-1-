const matrix = [
    [12, 23, 34, 45],
    [56, 67, 78, 89],
    [10, 20, 30, 40]
];
for (const numbers of matrix){
    for(const number of numbers){
        document.write(`${number},`)
    }
}

let sum = 0;
for (const numbers of matrix){
    for(const number of numbers){
        sum +=number
    }
}
document.write(`<br> sum of numbers: ${sum}`)

let max = 0
for (const numbers of matrix){
    for(const number of numbers){
      if(number > max) max = number
    }
    
}
document.write(`<br> max of numbers: ${max}`)
let min = 100
for (const numbers of matrix){
    for(const number of numbers){
      if(number < min) min = number
    }
    
}
document.write(`<br> min of numbers: ${min}<br>`)
let newMatrix=[]
for (const row of matrix){
    let newRow = []
    for(const num of row){
        if(num % 7 === 0 ) newRow.push(num) 
        else newRow.push("🤣");
    }
    newMatrix.push(newRow)
}

document.write(newMatrix);




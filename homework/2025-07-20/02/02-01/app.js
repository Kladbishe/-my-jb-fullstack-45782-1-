    const array= [];
const randomNum = (arr) =>{

    for(let i=1; i<=20;i++){
        const num = Math.floor(Math.random()*100)+1;
        arr.push(num)
    }
    return arr
}
randomNum(array)
array.forEach(num => console.log(num))
console.log('next')
console.log(array.find(num => num % 2 ===0))
console.log('next')
console.log(array.find(num => num > 50))
console.log('next')
console.log(array.filter(num => num % 2 !==0))

console.log('next')
console.log(array.filter(num => num > 50))
console.log('next')
console.log(array.findIndex(num => num > 50))
console.log('next')
array.forEach(num => {
    if(num % 2=== 0) console.log(`${num} It is an even number`)
    else console.log(`${num} It is an odd number`)
})
console.log('next')
let minNum = Infinity;
array.forEach(num =>{

    if(num<minNum) minNum = num
})
console.log(`${minNum} its a minimal num`)
console.log('next')

let maxNum = -Infinity;
array.forEach(num =>{

    if(num>maxNum) maxNum = num
})
console.log(`${maxNum} its a maximal num`)
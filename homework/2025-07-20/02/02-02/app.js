const array = [];

const randomNum = (arr) => {

    for (let i = 1; i <= 20; i++) {
        const point = {
            x: Math.floor(Math.random() * 101),
            y: Math.floor(Math.random() * 101) 
        }
        arr.push(point)
    }
    return arr
}
randomNum(array)


array.forEach(points => {
    console.log(`x: ${points.x} y: ${points.y}`)
})

console.log('next')
console.log(array.find(points => {
    return points.x > points.y
}))
console.log('next')
console.log(array.find(points => {
    return points.y > 50
}))
console.log('next')

console.log(array.filter(points => {
    return points.x % 2 !== 0
}))
console.log('next')

console.log(array.filter(points => {
    return points.y > 50
}))

console.log('next')
console.log(array.findIndex(points => {
    return points.x > 50
}))
console.log('next')

array.forEach(points => {
     const distance = Math.sqrt(points.x ** 2 + points.y ** 2)
    console.log(`Distance of point: ${points.x},${points.y} from original ${distance}`)
})

console.log('next')
let minX = Infinity;
array.forEach(point =>{ if(point.x<minX) minX = point.x})
console.log(`${minX} its a minimal x`)
console.log('next')
console.log('next')
let minXX = Infinity;
let minXIndex = -1;
array.forEach((point,index) => {

    if(point.x<minXX) {
        minXX = point.x
        minXIndex = index
    }
})
console.log(`${minXX} its a minimal x and index: ${minXIndex}`)
console.log('next')






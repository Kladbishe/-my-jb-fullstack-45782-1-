const array = [];

const randomNum = (arr) => {

    for (let i = 1; i <= 20; i++) {
        const point = {
            diameter: Math.floor(Math.random() * (40-10)) + 10,
            slices: Math.floor(Math.random() * 11),
            toppings: Math.floor(Math.random() * 6),
            price: Math.floor(Math.random() * (120-20)+20)

        }
        arr.push(point)
    }
    return arr
}
randomNum(array)

array.forEach(points => {
    console.log(`diameter: ${points.diameter} slices: ${points.slices} toppings: ${points.toppings}
        price: ${points.price}`)
})

console.log('next')
let toppingsIndex = -1;
console.log(array.find((point,index) =>{

    if(point.toppings === 0) {
        toppingsIndex = index
        console.log(`index of pizza ${toppingsIndex}`)
        return true
    }
    return false
    
}))
console.log('next')
let Price30Index = -1;
console.log(array.find((point, index) =>{
    if(point.price < 30){
        Price30Index = index
        console.log(`index of pizza ${Price30Index}`)
        return true
    }
    return false
}))

console.log('next')
console.log(array.filter((point, index)=>{
        let indexDiameter20 = -1;
        if(point.diameter <=20){
            indexDiameter20 = index
            console.log(` Index pizza  with 20 sm: ${indexDiameter20}  Pizza: diameter: ${point.diameter} slices: ${point.slices} toppings: ${point.toppings}
        price: ${point.price}`)
        }
}))

console.log('next')
console.log(array.filter((point, index)=>{
        let indexDiameter20 = -1;
        if(point.price < 80){
            indexDiameter20 = index
            console.log(` Index pizza  over 80$: ${indexDiameter20}  Pizza: diameter: ${point.diameter} slices: ${point.slices} toppings: ${point.toppings}
        price: ${point.price}`)
        }
}))

console.log('next')
console.log(array.filter((point, index)=>{
        let indexDiameter20 = -1;
        if(point.toppings === 0){
            indexDiameter20 = index
            console.log(` Index pizza  without toppings: ${indexDiameter20}  Pizza: diameter: ${point.diameter} slices: ${point.slices} toppings: ${point.toppings}
        price: ${point.price}`)
        }
}))

console.log('next')
console.log(array.findIndex(point =>{
    return point.slices === 6
})
)
console.log('Radius')
array.forEach(points => {
    const radius = points.diameter/2
    console.log(`${radius}`)
})

console.log('Vat')
const PriceWithVAT = array.map(pizza =>{
   const priceVat = pizza.price + (pizza.price/100*18)
    return priceVat
})

console.log(PriceWithVAT)
console.log(`sum`)
console.log(array.reduce((accumulator,pizza) =>{
    return accumulator + pizza.price;
},0))
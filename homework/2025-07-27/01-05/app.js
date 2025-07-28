"use strict";
const getPizzaFromServerAsync = () => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
         const n = Math.floor(Math.random()*101)
         if(n % 2 === 0){
            let pizza = {};
            pizza.diameter = Math.floor(Math.random()*(50-10+1)+10)
            pizza.price = Math.floor(Math.random()*(80-20+1)+20)
            pizza.NumberOfToppings  = Math.floor(Math.random()*(4-0+1)+4)
            return resolve(`your pizza:
                diameter: ${pizza.diameter}
                price: ${pizza.price}
                number of toppings ${pizza.NumberOfToppings}`)
         }else reject(`Failed to retrieve the pizza object from the server.`)
         console.log(n)
        },1000)
    })
}
document.getElementById('button').addEventListener('click', () =>{
    getPizzaFromServerAsync().then(message => alert(message)).catch(err => alert(err))
})
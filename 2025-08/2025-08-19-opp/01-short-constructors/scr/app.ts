import Car from './car.js'

const mazda = new Car('Mazda', "323", 1800,1998)
console.log(mazda.yearModel)
mazda.setMake('Ford')
console.log(`there are currently ${Car.getInstances()} cars in existence`)
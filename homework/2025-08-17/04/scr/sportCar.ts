import Car from "./car.js";

export default class SportCar extends Car{
    maximumSpeed: number
    numberOfRaces: number
    constructor(carNumber: number, manufacturer: string, model: string, color: string, engineCapacity: number,maximumSpeed: number, numberOfRaces: number){
        super(carNumber,manufacturer,model,color,engineCapacity)
        this.maximumSpeed = maximumSpeed
        this.numberOfRaces = numberOfRaces
    }
    displayCarDetails(){
        console.log(`This race car is a ${this.color} ${this.manufacturer} ${this.model} with an engine capacity of ${this.engineCapacity} liters, a maximum speed of ${this.maximumSpeed} km/h, and it has participated in ${this.numberOfRaces} races. `)
    }
}
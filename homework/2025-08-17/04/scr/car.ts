export default class Car{
    carNumber: number;
    manufacturer: string;
    model: string;
    color: string;
    engineCapacity: number
    static count: number = 0

    constructor( carNumber: number, manufacturer: string, model: string, color: string, engineCapacity: number){
        this.carNumber = carNumber
        this.manufacturer = manufacturer
        this.model = model
        this.color = color
        this.engineCapacity = engineCapacity
        Car.count++
    }

    displayCarDetails(){
        console.log(`This car is a ${this.color} ${this.manufacturer} ${this.model} with an engine capacity of ${this.engineCapacity} liters, and its registration number is ${this.carNumber}.`)
    }
}
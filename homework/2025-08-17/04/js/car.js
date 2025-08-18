export default class Car {
    constructor(carNumber, manufacturer, model, color, engineCapacity) {
        this.carNumber = carNumber;
        this.manufacturer = manufacturer;
        this.model = model;
        this.color = color;
        this.engineCapacity = engineCapacity;
    }
    displayCarDetails() {
        console.log(`This car is a ${this.color} ${this.manufacturer} ${this.model} with an engine capacity of ${this.engineCapacity} liters, and its registration number is ${this.carNumber}.`);
    }
}

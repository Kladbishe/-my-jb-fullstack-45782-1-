class Car {
    ignite() {
        console.log("hello");
    }
    getPrice() {
        return this.price * Car.vat;
    }
    constructor(make, model, engineVolume, yearModel, price) {
        this.make = make;
        this.model = model;
        this.engineVolume = engineVolume;
        this.yearModel = yearModel;
        this.engineNumber = Math.random() * 100000;
        this.price = price;
    }
}
Car.vat = 1.18;
export default Car;

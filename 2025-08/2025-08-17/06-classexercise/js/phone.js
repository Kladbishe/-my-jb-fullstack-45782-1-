export default class Phone {
    constructor(model, screen, price, generation) {
        this.model = model;
        this.screen = screen;
        this.price = price;
        this.generation = generation;
    }
    turnOn() {
        console.log("deivce is on");
    }
    turnOff() {
        console.log("deivce is off");
    }
    takePic() {
        console.log('say cheese...');
    }
}

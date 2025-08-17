import Animal from "./animal";
export default class Dog extends Animal {
    bark() {
        console.log('woof woof');
    }
    constructor(weight, canine) {
        super(weight);
        this.weight = weight;
    }
}

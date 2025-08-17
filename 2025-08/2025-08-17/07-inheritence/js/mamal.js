import Animal from "./animal.js";
export default class Mamal extends Animal {
    bestFeed() {
        console.log(`im feeding from my maml mother`);
    }
    constructor(weight, numberOfNipples) {
        super(weight);
        this.numberOfNipples = numberOfNipples;
    }
}

import Mamal from "./mamal.js";
export default class Cat extends Mamal {
    sayMiau() {
        console.log('miau');
    }
    constructor(weight, soulsLeft, numberOfNipples) {
        super(weight, numberOfNipples);
        this.soulsLeft = soulsLeft;
    }
}

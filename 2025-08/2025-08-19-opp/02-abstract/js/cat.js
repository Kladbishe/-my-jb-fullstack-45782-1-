import Mamal from "./mamal.js";
export default class Cat extends Mamal {
    defecate() {
        throw new Error("defected.....");
    }
    sayMiau() {
        console.log("miau");
    }
    constructor(weight, soulsLeft, numberOfNipples) {
        super(weight, numberOfNipples);
        this.soulsLeft = soulsLeft;
    }
}

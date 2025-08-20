import Animal from "./animal.js";

export default class Mamal extends Animal{
    defecate(): void {
        throw new Error("defected.....");
    }
    numberOfNipples: number
    bestFeed(){
        console.log(`im feeding from my maml mother`)
    }
    constructor(weight:number, numberOfNipples:number){
        super(weight)
        this.numberOfNipples = numberOfNipples
    }
}
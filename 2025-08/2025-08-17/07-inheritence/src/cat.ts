import Animal from "./animal.js"
import Mamal from "./mamal.js"

export default class Cat extends Mamal{
    soulsLeft: number
    sayMiau(){
        console.log('miau')
    }
    constructor(weight: number,soulsLeft: number, numberOfNipples:number){
        super(weight, numberOfNipples)
        this.soulsLeft = soulsLeft
    }
}
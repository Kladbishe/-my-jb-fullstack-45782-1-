import CoffeeShop from "./coffee-shop";
import SushiShop from "./sushi-shop";

export default class Kitchen implements SushiShop, CoffeeShop{
    makeCoffee(): void {
        console.log('ground the beans them add hot water')
    }
    makeSushi(): void {
        
    }
    makeBlackCoffee(): void {
        console.log(`hot water small glass put in`)
    }
}

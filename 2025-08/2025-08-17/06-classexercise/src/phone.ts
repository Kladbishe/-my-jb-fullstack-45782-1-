export default class Phone {
  model: string | number;
  screen: number;
  price: number;
  generation: number;

  constructor(model: string | number,screen: number,price: number,generation: number,) {
    this.model = model;
    this.screen = screen;
    this.price = price;
    this.generation = generation;
  }
  turnOn(){
    console.log("deivce is on")
  }
    turnOff(){
    console.log("deivce is off")
  }
  takePic(){
    console.log('say cheese...')
  }
}

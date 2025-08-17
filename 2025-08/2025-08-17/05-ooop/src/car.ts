export default class Car {
  make: string;
  model: string;
  engineVolume: number;
  yearModel: number;
  readonly engineNumber: number;
  price: number
  static vat: number = 1.18

  ignite() {
    console.log("hello");
  }
  getPrice(){
    return this.price * Car.vat
  }
  constructor(make: string,model: string,engineVolume: number,yearModel: number,price: number) {
    this.make = make;
    this.model = model;
    this.engineVolume = engineVolume;
    this.yearModel = yearModel;
    this.engineNumber = Math.random() * 100000;
    this.price = price 
  }
}

export default class Car {
  // make: string
  // model: string
  // engineVolume: number
  // yearModel: number
  static count: number = 0

  // constructor(make: string, model:string, engineVolume:number,yearModel: number) {
  //     this.make = make
  //     this.engineVolume = engineVolume
  //     this.model = model
  //     this.yearModel = yearModel
  //     Car.count++
  // }

  constructor(
    private make: string,
    protected model: string,
    public engineVolume: number,
    public yearModel: number
  ) {
    Car.count++
  }

  setMake(make: string){
    this.make = make
  }
  public getMake(){
    return this.make
  }

  static getInstances() {
    return Car.count;
  }
}

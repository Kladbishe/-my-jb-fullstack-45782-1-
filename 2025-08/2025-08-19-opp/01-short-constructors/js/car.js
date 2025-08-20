class Car {
    // constructor(make: string, model:string, engineVolume:number,yearModel: number) {
    //     this.make = make
    //     this.engineVolume = engineVolume
    //     this.model = model
    //     this.yearModel = yearModel
    //     Car.count++
    // }
    constructor(make, model, engineVolume, yearModel) {
        this.make = make;
        this.model = model;
        this.engineVolume = engineVolume;
        this.yearModel = yearModel;
        Car.count++;
    }
    setMake(make) {
        this.make = make;
    }
    getMake() {
        return this.make;
    }
    static getInstances() {
        return Car.count;
    }
}
// make: string
// model: string
// engineVolume: number
// yearModel: number
Car.count = 0;
export default Car;

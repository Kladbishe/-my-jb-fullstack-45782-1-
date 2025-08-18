export default class Flashlight {
  color: string;
  length: number;
  lightIntensity: number;
  numberOfBatteries: number;

  constructor( color: string, length: number, lightIntensity: number, numberOfBatteries: number ) {
    this.color = color;
    this.length = length;
    this.lightIntensity = lightIntensity;
    this.numberOfBatteries = numberOfBatteries;
  }
  turnOn() {
    console.log("Flashlight now On....");
  }
  turnOff() {
    console.log("Flashlight now Off....");
  }
  replaceBatteries() {
    console.log("Replace batteries");
  }
  showDetails() {
    console.log(
      `This flashlight is ${this.color}, has a length of ${this.length} cm, a light intensity of ${this.lightIntensity} lumens, and uses ${this.numberOfBatteries} batteries.`
    );
  }
}

import Car from "./car.js";
const micra = new Car("Nissan", "Micra", 1300, 2012, 1500);
// micra.make = "Nissan";
// micra.model = ;
// micra.engineVolume = 1300;
// micra.yearModel = 2012;
console.log(micra.engineVolume);
console.log(micra.ignite());
const mazda5 = new Car("Mazda", "5", 2000, 2010, 24000);
// mazda5.make = "Mazda";
// mazda5.model = "5";
// mazda5.engineVolume = 2000;
// mazda5.yearModel = 2010;
console.log(mazda5.ignite);
console.log(mazda5.engineVolume);
const vitara = new Car("Suzuki", "Vitara", 1600, 2020, 72000);
// vitara.make = "Suzuki";
// vitara.model = "Vitara"
// vitara.engineVolume = 1600
// vitara.yearModel = 2020
console.log(mazda5.engineNumber);
console.log(vitara.engineNumber);
console.log(micra.engineNumber);
console.log(micra.price * Car.vat);
console.log(vitara.getPrice());

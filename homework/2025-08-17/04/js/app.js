import Car from "./car.js";
import SportCar from "./sportCar.js";
const mazda323 = new Car(5038827, "mazda", "323f", "red", 1800);
mazda323.displayCarDetails();
const ferrari = new SportCar(120313, "Ferrari", "spider", "black", 5400, 300, 2);
ferrari.displayCarDetails();

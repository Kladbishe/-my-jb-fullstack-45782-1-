import Cat from "./cat.js";
import Dog, { Canine } from "./dog.js";
const dog = new Dog(40, Canine.Labrador);
const cat = new Cat(4, 7);
function doSomethingWithDog(dog) {
    // const clonedDog = cloneDog(dog)
    const clonedDog = cloneAnimal(dog);
}
function cloneDog(dog) {
    return Object.assign({}, dog);
}
function cloneCat(cat) {
    return Object.assign({}, cat);
}
function doSomethingWithCat(cat) {
    const clonedDog = cloneAnimal(cat);
}
function cloneAnimal(animal) {
    return Object.assign({}, animal);
}
doSomethingWithDog(dog);
console.log(dog.canine);
console.log(dog.width);

import Cat from "./cat.js"
import Dog , {Canine }from "./dog.js"
const dog = new Dog(40, Canine.Labrador)
const cat = new Cat(4,7)


function doSomethingWithDog(dog:Dog){
  // const clonedDog = cloneDog(dog)
  const clonedDog =cloneAnimal<Dog>(dog)
}

function cloneDog(dog: Dog): Dog{
  return {...dog} as Dog
}
function cloneCat(cat: Cat): Cat{
  return {...cat} as Cat
}


function doSomethingWithCat(cat:Cat){
  const clonedDog =cloneAnimal(cat)
}
function cloneAnimal<T>(animal: T ): T {
return {...animal} as T
}


doSomethingWithDog(dog)
console.log(dog.canine)
console.log(dog.width)
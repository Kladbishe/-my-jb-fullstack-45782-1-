"use strict";
const animals = ["kitten", "puppy", "bunny", "parakeet", "scorpion", "spider", "cockroach"];
const notCuteAnimals = ["scorpion", "spider", "cockroach"];
const generateCuteAnimalAfterDelayAsync = () =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const randomAnimal = animals[Math.floor(Math.random() * animals.length)];
        if(notCuteAnimals.includes(randomAnimal)) return reject(`The animals ${randomAnimal} is not cute`)
            else return resolve(`Success cute animal ${randomAnimal}`)
        },1000)
        
    })
}
generateCuteAnimalAfterDelayAsync().then(res => alert(res)).catch(err =>alert(err))
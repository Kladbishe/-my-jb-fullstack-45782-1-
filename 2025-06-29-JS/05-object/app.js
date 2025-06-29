const dogName = 'Betty';
const dogAge = 3;
const dogBreed = 'mixed';
const dogGender = 'female';
const dogWeight = 20;

const dog = {
    name: 'Betty',
    age: 3,
    breed: "mixed",
    gender: 'female',
    weight: 20
}
dog.color = 'grey';
console.log(dog);
console.log(`my dog name is ${dog.name} and ${dog.gender === 'male' ? 'he' : 'she'} weight ${dog.weight} and the is color ${dog.color}`)
dog.color = 'black';
console.log(`my dog name is ${dog.name} and ${dog.gender === 'male' ? 'he' : 'she'} weight ${dog.weight} and the is color ${dog.color}`)


delete dog.age;
console.log(`dog age is ${dog.age}`)
// for-in
for(const property in dog){
    console.log(property)
    document.write(`${property}:${dog[property]} <br>`)
    
}


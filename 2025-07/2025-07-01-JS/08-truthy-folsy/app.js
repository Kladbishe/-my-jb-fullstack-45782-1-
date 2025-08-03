const age = 16
const isAdult = age > 18
console.log(typeof isAdult);
if (isAdult) console.log('we have an adult');
else console.log('we have a child');

const weight = '48';
if (weight) console.log('we have a weight')
else console.log('no weight')
const student1 = {
    name: 'ido', // '' is false, any other string is true 
    age: 1, // 0 is false, any other number is true 
    city: "haifa"
}
const student2 = {
    name: '',
    age: 40
}
if (student1.name) console.log("student has name ")
if (student2.name) console.log("student has name ")


if (student1.age) console.log("student has age ")
if (student2.age) console.log("student has age ")

if (student1.city) console.log("student has city ")
if (student2.city) console.log("student has city ") //undefined always false


const average = +"qfdawf"
console.log(average);
if(average) console.log('Nan is true')
const number = 123;
console.log(typeof number);


const anotherNumber = "123";
console.log(typeof anotherNumber);

const isBingo =  true;
console.log(typeof isBingo);


console.log(`is bingo is ${typeof isBingo === "boolean" ? "" : "not "} boolean`);

const result = 4 + 4;
console.log(typeof result);

const result2 = "4" + "4";
console.log(typeof result);

let something;
if(something === undefined) console.log('something is undefined')
if(something === "undefined") console.log('something is undefined')
console.log(typeof something);


const student = {
    name: "ido",
    city: "haifa",
    grades: [80,90,50]
}
console.log(typeof student);
console.log(typeof student.grades);

console.log(typeof console.log)

const studentsJson = `
    [
        {
        "name": "ido",
        "city": "tel-aviv",
        "grades": [97,87,78],
        "age": 25
        }
    ]
`
console.log(typeof studentsJson);
console.log(typeof JSON.parse(studentsJson));
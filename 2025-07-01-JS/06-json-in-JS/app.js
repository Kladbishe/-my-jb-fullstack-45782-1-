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
const student = JSON.parse(studentsJson)


console.log(studentsJson);

student[0].age++;
console.log(student);

const modifiedJson = JSON.stringify(student);

console.log(modifiedJson);
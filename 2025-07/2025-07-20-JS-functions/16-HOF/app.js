const students = [
    {
        name: "Daen",
        grade: 95,
        age: 21,
        gender: 'male'
    },
    {
        name: "Micael",
        grade: 92,
        age: 36,
        gender: 'male'
    },
    {
        name: "Ruth",
        grade: 88,
        age: 29,
        gender: 'female'
    },
]
// native way of find:
let student;
const findStudent = name => {
    for (const currentStudent of students) {
        if (currentStudent.name === name) return currentStudent;

    }
    return undefined;
}


console.log(findStudent("Ruth"))

console.log(students.find(currentStudent => currentStudent.name === "Ruth"))
console.log(students.findIndex(currentStudent => currentStudent.name === "Ruth"))





const findStudentGrades = grade => {
    const result = [];
    for (const currentStudent of students) {
        if (currentStudent.grade >= grade) {
            result.push(currentStudent)
        }

    }
    return result;
}
console.log(findStudentGrades(90))


console.log(students.filter(currentStudent => currentStudent.grade > 90))


//native map

const mapGrades = grade => {
    const result = [];
    for (const currentStudent of students) {
        
            result.push(currentStudent.grade)
        

    }
    return result;
}
console.log(mapGrades(student))

console.log(students.map(currentStudent => currentStudent.grade).filter(grade => grade >=90))
console.log(students.map(currentStudent => currentStudent.name))
console.log(students.map(currentStudent => { return { name: currentStudent.name, age: currentStudent.age}}))



students.forEach(student => console.log(student))
students.forEach(currentStudent => currentStudent.name)
students.forEach(console.log)
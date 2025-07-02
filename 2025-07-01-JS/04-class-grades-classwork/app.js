const ido = {
    name: 'ido',
    city: 'haifa',
    grades: [50, 70, 92],
}
const lior = {
    name: 'lior',
    city: 'Tel-aviv',
    grades: [40, 30, 94],
}

const itay = {
    name: 'itay',
    city: 'Haifa',
    grades: [10, 20, 91],
}

const students = [ido, lior, itay]
// for (const student of students) {
//     let sum = 0;
//     let min = 100;
//     let max = 0;
//     for (let grade of student.grades) {
//         if (grade > 0) max = grade
//         if (grade < min) min = grade
//     }
//     console.log(`${student.name} - max : ${max} and min grades: ${min}`);
// }                        //разобрать 
let min = 100;
let max = 0;
let maxStudent, minStudent

for (const student of students) {
    for (const grade of student.grades) {
        if (grade > max) {
            maxStudent = student.name
            max = grade
        }
        if (grade < min) {
            minStudent = student.name
            min = grade;
        }
    }
}
console.log(`max is ${max} by ${maxStudent}, min us ${min} by ${minStudent}`)
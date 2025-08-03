const ido = {
    name: 'ido',
    city: 'haifa',
    grades: [50, 70, 90],
}
const lior = {
    name: 'lior',
    city: 'Tel-aviv',
    grades: [40, 30, 90],
}

const itay = {
    name: 'itay',
    city: 'Haifa',
    grades: [10, 20, 90],
}
let average = 0;
const students = [ido, lior, itay]
for (const student of students) {
    let sum = 0;
    for (let grade of student.grades) {
        sum += grade
    }
    let average = sum / student.grades.length;
    console.log(`${student.name} - average grade: ${average}`);
}
const grades = [98, 67, 80, 82, 95, 33 , 44];

console.log(grades);
console.log(`first grade: ${grades[0]}`);
grades[3] = 85;
console.log(`i have ${grades.length} defferent grades in the array`)
console.log(`last grade: ${grades[grades.length - 1]}`) //даже когда добовляют новые оценки
grades.splice(2, 1)
console.log(`${grades[2]}`);

for(let offset = 0 ; offset < grades.length ; offset++){
    console.log(grades[offset]);
}
console.log(`___________________`);
for(const grade of grades){
    console.log(grade)
}
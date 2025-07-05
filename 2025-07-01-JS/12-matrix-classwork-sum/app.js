const grades = [
    [80, 90, 100],
    [70, 80, 90],
    [60, 98, 78],
];
let sum = 0;
for ( const grade of grades){
    for(const OneGrade of grade){
        sum +=OneGrade
    }
};
console.log(`Sum for grades: ${sum}`);
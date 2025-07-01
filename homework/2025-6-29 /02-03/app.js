const grades = [];
const noGrades = [];
for (let count = 1; count <= 10; count++) {
    const grade= +prompt('please enter a grade')

    if(grade >= 0 &&  grade <= 100){
    grades.push(grade);
    }
    else{
        noGrades.push(grade);
    }
};
document.write(`These grades are valid: ${grades} <br>`);
document.write(`Invalid grades: ${noGrades} `)
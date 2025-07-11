
let sum = 0
let count = 0
function addColor(event) {
    event.preventDefault();
    const data = collectDataFromForm();
    const newTR = generateTR(data);

    const avg = average(data);
    injectOToDOM(newTR,avg);
    clearForm();
    
}
function collectDataFromForm() {
    const firstName = document.getElementById('firstNameStudent').value;
    const lastName = document.getElementById('lastNameStudent').value;
    const grade = document.getElementById('gradeStudent').value;
    return {
        firstName,
        lastName,
        grade
    }
}
function generateTR(data) {
    const newTR =
        `               <tr><td>${data.firstName}</td>
                    <td>${data.lastName}</td>
                    <td>${data.grade}</td></tr>`
    return newTR;
}
function injectOToDOM(newTR,avg) {
    document.getElementById('student-list').innerHTML += newTR;
    document.getElementById('averageGrade').innerHTML =  `average grade for the whole class: ${avg}`
}
function clearForm() {
    document.getElementById('formGrages').reset();
}

function average(data) {
    sum += Number(data.grade);
    count++
    const avg = sum / count
    return avg
}

const grades = [90, 80, 70];
const age = [12, 15, 55, 44, 87, 77];
function printMaxItemOfArray(arrays, label) {
    let max = 0;
    for (let array of arrays) {
        if (array > max) max = array
        
    }
    console.log(`max ${label} is a ${max}`)
}
printMaxItemOfArray(grades, 'grades');
printMaxItemOfArray(age, 'ages');

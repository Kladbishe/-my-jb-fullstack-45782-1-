const firstName = prompt('enter first name');
const lastName = prompt('enter last name');
console.log(`${firstName} ${lastName}`);
function name1(firstName){
    console.log(`${firstName[0].toUpperCase()}${firstName.substring(1)}`)
}
function name2 (LastName){
    console.log(`${lastName[0].toUpperCase()}${lastName.substring(1)}`)
}
name1(firstName)
name2(lastName)

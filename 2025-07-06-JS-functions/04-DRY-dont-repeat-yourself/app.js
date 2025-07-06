const firstName = prompt('enter first name');
const lastName = prompt('enter last name');
// console.log(`${firstName} ${lastName}`);
function printStyledName(name){
    console.log(`${name[0].toUpperCase()}${name.substring(1)}`)
}
printStyledName(firstName);
printStyledName(lastName);

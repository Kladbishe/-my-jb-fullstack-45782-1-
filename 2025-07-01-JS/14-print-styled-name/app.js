const firstName = prompt(`Enter first name`);
const lastName = prompt(`Enter last name`);
styleName(firstName);
styleName(lastName);
function styleName(name){
console.log(`${name[0].toUpperCase()}${name.substring(1)}`)
}
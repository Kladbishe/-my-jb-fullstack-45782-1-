const name = [];
for (let count = 1; count <= 5; count++) {
    name.push(prompt('please enter name'))

}
document.write(`First name: ${name[0]} <br> last name: ${name[name.length - 1]} <br>`)
for (const names of name) {
    document.write(`${names} <br>`)
};

for(let revers = name.length - 1; revers>= 0; revers -- ){
    document.write(`${name[revers]} <br>`)
}
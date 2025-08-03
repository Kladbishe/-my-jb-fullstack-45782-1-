const working = {
    name: {
        firs: "israel",
        middle: 'museri',
        last: 'israel',
    },
    wage: 10000
}
document.write(`name for working is ${working.name} and earn ${working.wage} nis <br>`)
working.address = "haifa";
document.write(`${working.address} <br>`)
delete working.name;
delete working.lname;
for (const p in working) {
    document.write(`${p} :   ${working[p]} <br>`)
}

const employee = {
    firstName: 'Israel',
    lastName: 'Israeli',
    salary: 20000,
    mail: "Israel@gmail.com",
    phone: "0584445504",
};
document.write(`first Name: ${employee.firstName} <br>
                last name: ${employee.lastName} <br>
                salary: ${employee.salary} <br>
                mail: ${employee.mail} <br>
                phone: ${employee.phone} <br>`);
document.write(`____________________ <br>`)
for (const p in employee) {
    document.write(`${p}: ${employee[p]} <br>`)
}
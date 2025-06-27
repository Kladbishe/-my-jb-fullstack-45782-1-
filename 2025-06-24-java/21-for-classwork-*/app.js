
// for (let current = 0; current <= 10; current++) {
//     document.write(`********** <br>`);
// }
for (let counter = 1; counter <= 100; counter++){
    document.write(`${counter % 10 == 0 ? `<br>` : '*'}`);
}
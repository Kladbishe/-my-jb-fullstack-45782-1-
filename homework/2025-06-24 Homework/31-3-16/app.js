// let num = +prompt('enter a number');

// while (true) {
//     switch (num % 7 === 0) {
//         case true:
//             document.write(`${num} divides by 7<br>`);
//             break;
//         default:
//             document.write(`${num} does not divide by 7<br>`);
//     }

//     if (num === 0) {
//         break;
//     }

//     num = +prompt('enter a number');
// }

let num = +prompt('enter a number');
while (num !== 0) {
    if (num % 7 === 0) {
        document.write(`${num} divides by 7<br> `);
        
    }
    else{
        document.write(`${num} does NOT divides by 7<br> `);
    }
    num = +prompt('enter a number');
}
document.write(`${num} divides by 7<br> `);
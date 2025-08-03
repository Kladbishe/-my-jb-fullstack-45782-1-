const num = [];
for (let i = 1; i <= 100; i++) {
    num.push(Math.floor(Math.random() * 201) - 100)
}
document.write(`${num}`);
let isBingo = false;
const input = +prompt(`enter a number between -100 to 100`)
for (const nums of num) {
    if (input === nums) isBingo = true
}
document.write(`,<br>`)
document.write(isBingo ? "<br>" + "bingo!!!!!" : "<br>" + "not bingo(");
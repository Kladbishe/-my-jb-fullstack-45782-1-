min = +prompt('enter a min number');
max = +prompt('enter a max number');

for (let count = 1; count <= 100; count++) {
    const random = Math.random();
    document.write(`${parseInt(random * (max - min + 1)) + min} <br>`);
}   

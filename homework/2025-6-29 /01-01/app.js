const rectangle = {
    width: 20,
    height: 15,
    color: 'blue',
    x: 100,
    y: 50,
};
document.write(`width: ${rectangle.width} <br>
                height: ${rectangle.height} <br>
                color: ${rectangle.color} <br>
                x: ${rectangle.x} <br>
                y: ${rectangle.y} <br>`);
document.write(`____________________ <br>`)
for (const p in rectangle) {
    document.write(`${p}: ${rectangle[p]} <br>`)
}
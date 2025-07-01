const song = [];
for (let count = 1; count <= 3; count++) {
    song.push(prompt('please enter a song'))

};
document.write(`${song} <br>`);
song.splice(1, 1);
document.write(song);
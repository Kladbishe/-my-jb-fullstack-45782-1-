function randomNumStartStop(start, stop) {
    document.write(`random number from ${start} to ${stop} this ${Math.floor(Math.random() * (stop - start + 1)) + start} <br>`)
}
randomNumStartStop(20, 30)
randomNumStartStop(+prompt("enter a number"), +prompt("enter a number"))
for (i = 1; i <= 100; i++) {
    randomNumStartStop(-10,10)
}
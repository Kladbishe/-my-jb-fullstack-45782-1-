

function BoxStar(count) {
    for (let i = 1; i <= count; i++) {
        let n = Math.floor(Math.random() * 100)
        let n2 = Math.floor(Math.random() * 100)
        for (let z = 1; z <= n; z++) {
            document.write(`<br>`)
            for (let j = 1; j <= n2; j++) {
                document.write(`*`)
            }
        }
        document.write(`<br>`)
    }
}
BoxStar(+prompt('enter a number'))
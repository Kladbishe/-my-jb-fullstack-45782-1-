function converselyFromNumTo1(num) {
    for (i = num; i >= 1; i--){
        document.write(`${num} `)
        num--;
    }
}
converselyFromNumTo1(10)
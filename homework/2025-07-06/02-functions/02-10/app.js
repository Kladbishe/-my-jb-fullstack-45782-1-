function array(array = []) {
    let sum = 0;
    average = 0;
    for (let num of array) {
        sum += num
    }
    average = sum / array.length
    document.write(`its average for array number ${average} `)

}
array([12, 13, 42])
array([Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101), Math.floor(Math.random() * 101)])
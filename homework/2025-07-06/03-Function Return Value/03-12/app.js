function getRandomInRange(start,stop){
    return Math.floor(Math.random()*(stop-start+1)+start)
}
document.write(`${getRandomInRange(-10,20)}`)
function sayHi(){
    alert('hi')
}
function getRandomNumber(min,max){
    return parseInt(Math.random()*(max-min +1) + min)
}
function showRandomNumber(){
    alert(getRandomNumber(0,100));
}


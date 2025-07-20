function showSomething(something){
    console.log(`something is ${something}`)
    console.log(`something type is ${typeof something}`)
}
const name = 'Pavel'
showSomething(name)
showSomething(96);
showSomething(showSomething)
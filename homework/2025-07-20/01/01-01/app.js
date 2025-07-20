function name() {
    const yourName = prompt("enter your name")
    document.getElementById('name').innerHTML += yourName;
}
name()
function HTMLName(callback) {
    callback()
}
HTMLName(name)



const HTMLNameNew = () => {
    const yourName = prompt("enter your name")
    document.getElementById('name').innerHTML += yourName;
}


HTMLName(()=>{
        const yourName = prompt("enter your name")
    document.getElementById('name').innerHTML += yourName;
})

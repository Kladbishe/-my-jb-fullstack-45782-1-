function tellFirstName() {
    const name = prompt(`enter your name`);
    document.querySelectorAll('input')[0].value = name;
    document.querySelectorAll('input')[0].placeholder='YOUR Gay'
}
function changeInputBackground(){
    const color = prompt('enter color')
    for(const element of document.querySelectorAll('form>input')) element.style.backgroundColor = color;
}
function paintDiv(){
    const color = prompt('enter a color')
    document.getElementById('container').style.backgroundColor = color
}
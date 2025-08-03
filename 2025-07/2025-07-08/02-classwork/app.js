function change() {
    const colorInput = document.getElementById('color-input')
    const textInput = document.getElementById('text-input')
    const paragraph =document.getElementById('content')
    paragraph.innerText = textInput.value;
        
    paragraph.style.backgroundColor = colorInput.value
}

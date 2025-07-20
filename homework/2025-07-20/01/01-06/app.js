// function color(color){
//   let element = document.getElementById('num');
//   element.style.backgroundColor = color
// }

function nice(paintCallback) {
	paintCallback("green");
}


// nice(color)


// const colorBg = (value) => {
//     let element = document.getElementById('num');
//   element.style.backgroundColor = value
// }

// nice(colorBg)



nice((color)=>{
    let element = document.getElementById('num');
  element.style.backgroundColor = color
})
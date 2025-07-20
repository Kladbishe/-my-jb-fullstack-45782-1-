function randomColor(a,b,c){
  const colors = [a,b,c]
  const randomIndex=Math.floor(Math.random()* colors.length)
  const ranCol = colors[randomIndex]
  let element = document.getElementById('num');
  element.style.backgroundColor = ranCol
  return ranCol
}



function amazing(paintCallback) {
	const paintedColor = paintCallback("Red", "Green", "Blue");
	console.log("Painted Color:"  + paintedColor);
}


amazing(randomColor)


const randomColorBg = (a,b,c) => {
    const colors = [a,b,c]
  const randomIndex=Math.floor(Math.random()* colors.length)
  const ranCol = colors[randomIndex]
  let element = document.getElementById('num');
  element.style.backgroundColor = ranCol
  return ranCol
}
amazing(randomColorBg)
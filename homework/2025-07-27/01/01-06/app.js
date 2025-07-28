'use strict';
setInterval(()=>{
    const colors = ["red", "blue", "green", "yellow", "pink", "orange", "purple"];
    const index = Math.floor(Math.random()* colors.length)
    document.body.style.backgroundColor = colors[index]
},1000)
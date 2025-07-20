const colors = ["red", "green", "blue", "yellow", "purple", "orange"];
setInterval(()=>{
    const randomIndex = Math.floor(Math.random()* colors.length)
    document.body.style.backgroundColor = colors[randomIndex];
}, 1000)
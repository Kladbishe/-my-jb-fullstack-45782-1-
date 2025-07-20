
setInterval(() => {
    const array = Array.from({ length: 100 }, () => Math.floor(Math.random()*100)+1)
    document.getElementById('num').innerHTML = array
}, 1000)
'use strict';
setInterval(()=>{
    const num = +document.getElementById('number').value
    const randomNum = Math.floor(Math.random()*(num+1))
    document.getElementById('here').innerHTML +=randomNum + " "
},1000)
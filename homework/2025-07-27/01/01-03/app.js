'use strict';

(()=>{
    console.log('start')
    const time = new Date().toLocaleTimeString()
    setTimeout(()=>{
        console.log(time)
    },3000)
    console.log("end")
})()
'use strict';

(() => {
    console.log('start')

    setTimeout(() => {
        console.log(Math.floor(Math.random() * 100))
        setTimeout(() => {
            console.log(Math.floor(Math.random() * 100))
            setTimeout(() => {
                console.log(Math.floor(Math.random() * 100))
            }, 2000)
        }, 2000)
    }, 3000)
    console.log("end")
})()
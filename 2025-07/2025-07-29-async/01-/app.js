"use strict";

(() => {
    const getSquareValuePromise = num => new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(num ** 2)
          
        }, 1000)
        

    })
    getSquareValuePromise(4).then(console.log)
})()
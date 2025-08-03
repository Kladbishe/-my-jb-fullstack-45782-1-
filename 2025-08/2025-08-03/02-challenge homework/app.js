"use strict";

(async () => {

    const sum = (successCallback, errorCallback, a, b) => {
        setTimeout(() => {
            if (a % 7 === 0 || b % 7 === 0) return errorCallback('boom')
            return successCallback(a + b)
        }, 0)
    }
    // lets say i have these async callback functions
    const power = (successCallback, errorCallback, num) => {
        setTimeout(() => {
            if (num % 7 === 0) return errorCallback('boom')
            return successCallback(num ** 2)
        }, 0)
    }

    const sqrt = (successCallback, errorCallback, num) => {
        setTimeout(() => {
            if (num % 7 === 0) return errorCallback('boom')
            return successCallback(Math.sqrt(num))
        }, 0)
    }

    // how i would use them:
    power(console.log, console.log, 4) // 16
    sqrt(console.log, console.log, 4) // 2
    power(console.log, console.log, 49) // boom
    sqrt(console.log, console.log, 49)
    sum(console.log, console.log,3,4) // boom

    // but i want promises...
    // so i promisify:
    // const powerPromisified = num => new Promise((resolve, reject) => {
    //     power(resolve, reject, num)
    // })

    // const sqrtPromisified = num => new Promise((resolve, reject) => {
    //     sqrt(resolve, reject, num)
    // })
    const mathFuncPromisified = (...args) => new Promise((resolve, reject) => {
        const myArgs = [...args]
        const func =myArgs[0]
        myArgs.slice(0,1)

        func(resolve, reject, ...myArgs)
    })
    
    const powerPromisified = num => mathFuncPromisified(num)
    const sqrtPromisified = num => mathFuncPromisified(num)
    const sumPromisified = (num,num2) => mathFuncPromisified(num,num2)
    // and i try to use them:
    try {
        const results = await Promise.allSettled([
            powerPromisified(4),
            sqrtPromisified(4),
            powerPromisified(49),
            sqrtPromisified(49),
            sumPromisified(4, 3)
        ])
        console.log(results)
        /* 
            [
                {status: 'fulfilled', value: 16},
                {status: 'fulfilled', value: 2},
                {status: 'rejected', reason: 'boom'},
                {status: 'rejected', reason: 'boom'}
            ]
        */

    } catch (err) {
        console.log(err)
    }

    // now i feel a little victory...
    // however something bothers me...
    // 1. what bothers me? imagine you get a PR and you do a code review, which very important
    //      principle is broken? look at lines 27-33.
    // 2. solve it
    // 3. let's say i have a function 

    //      did the solution you gave in #2 still works? try it
    // 4. make it work. 
    //      a. clue: you don't have all the knowledge required to solve this bullet
    //          however, there's only one tiny bit missing. google "...args"
    //          you already know about the spread operator from the cloning class, 
    //          you just never used it in the argument list of a function

})()
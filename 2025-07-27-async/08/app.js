(() => {
    const getAsyncRandomNumber = (max, successCallback, errorCallback) => {
        setTimeout(() => {
            const random = Math.random() * max
            if (random > max) errorCallback('internal server')
            else successCallback(random)
        }, 100)

    }





    getAsyncRandomNumber(100, nextMax => {
        getAsyncRandomNumber(nextMax, nextMax => {
            getAsyncRandomNumber(nextMax, nextMax => {
                getAsyncRandomNumber(nextMax, nextMax => {
                    getAsyncRandomNumber(nextMax, nextMax => {
                        getAsyncRandomNumber(nextMax, nextMax => {
                            getAsyncRandomNumber(nextMax, nextMax => {
                                getAsyncRandomNumber(nextMax, nextMax => {
                                    getAsyncRandomNumber(nextMax, nextMax => {
                                        getAsyncRandomNumber(nextMax, nextMax => {
                                            getAsyncRandomNumber(nextMax, nextMax => {
                                                getAsyncRandomNumber(nextMax, nextMax => {
                                                    console.log(nextMax)
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })




    const getAsyncRandomNumberPromise = (max) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const random = Math.random() * max
                if (random > max) reject('internal server')
                else resolve(random)
            }, 100)
        })


    }

    const p = getAsyncRandomNumberPromise(100)
    p.then(random => { console.log(random) }

    ).catch(err => { console.log(`there was an error: ${err}`) }
    ).finally(() => { console.log('in finally') })
    console.log(p)




})()
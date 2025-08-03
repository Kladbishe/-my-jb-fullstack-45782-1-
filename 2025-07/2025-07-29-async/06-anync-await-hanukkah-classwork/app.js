(() => {

    const getNumOfCandles = (hanukkahSerialDay) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (hanukkahSerialDay > 8) reject(`max day is 8`)
                if (hanukkahSerialDay < 1) reject(`min day is 1`)
                resolve(hanukkahSerialDay + 1)
            }, 3000)
        })


    }
    getNumOfCandles(7).then(console.log).catch(console.log)
    getNumOfCandles(0).then(console.log).catch(console.log)
    getNumOfCandles(10).then(console.log).catch(console.log)
})()



    (() => {

        const getNumOfCandles = (hanukkahSerialDay) => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (hanukkahSerialDay > 8) reject(`max day is 8`)
                    if (hanukkahSerialDay < 1) reject(`min day is 1`)
                    resolve(hanukkahSerialDay + 1)
                }, 3000)
            })


        }
        // Promise.all([1, 2, 3, 4, 5, 6, 7, 8].map(current=>getNumOfCandles(current))) это дольше правильно ниже
        Promise.all([1, 2, 3, 4, 5, 6, 7, 8].map(getNumOfCandles))
            .then(results => {
                const totals = results.reduce((cumulative, current) => cumulative + current, 0)
                console.log(`number of candles in hannukah ${totals}`)
            })
            .catch(console.error)
    })()



    (async () => {

        const getNumOfCandles = (hanukkahSerialDay) => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (hanukkahSerialDay > 8) reject(`max day is 8`)
                    if (hanukkahSerialDay < 1) reject(`min day is 1`)
                    resolve(hanukkahSerialDay + 1)
                }, 3000)
            })


        }
        try {
            const results = await Promise.all([1, 2, 3, 4, 5, 6, 7, 8].map(getNumOfCandles))
            const totals = results.reduce((cumulative, current) => cumulative + current, 0)
            console.log(`number of candles in hannukah ${totals}`)
        } catch (err) { console.log(err) }
    })()
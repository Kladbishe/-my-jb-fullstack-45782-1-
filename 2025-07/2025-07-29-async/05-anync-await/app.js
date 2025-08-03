(async () => {




    const getAsyncRandomNumberPromise = (max) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const random = Math.random() * max
                if (random > max) reject('internal server')
                else resolve(random)
            }, 100)
        })


    }

    const p = getAsyncRandomNumberPromise(1000000)
    p.then(random => {
        console.log(random)
        return getAsyncRandomNumberPromise(random)
    }).then(random => {
        console.log(random)
        return getAsyncRandomNumberPromise(random)
    }).then(random => {
        console.log(random)
        return getAsyncRandomNumberPromise(random)
    }).then(random => {
        console.log(random)
        return getAsyncRandomNumberPromise(random)
    })
        .catch(err => { console.log(`there was an error: ${err}`) })
        .finally(() => { console.log('in finally') })
    console.log(p)

    const exampleFunc = async num => num * 2
    console.log(exampleFunc(4))
    try {
        let random = await getAsyncRandomNumberPromise(100)
        random = await getAsyncRandomNumberPromise(100)
        random = await getAsyncRandomNumberPromise(100)
    } catch (err) { console.log(err) } finally { console.log('finally') }

})()
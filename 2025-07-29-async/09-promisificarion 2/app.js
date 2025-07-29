"use strict";

(async () => {

    const getUserLocation = () => new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject)
    })


    const sleep = millSecond => {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, millSecond)
        })

    }


    try {
        let geo = await getUserLocation()
        console.log(geo)

        await sleep(5000)

        geo = await getUserLocation()
        console.log(geo)

    } catch (err) {
        console.log(err)
    }
})()
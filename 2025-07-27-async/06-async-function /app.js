"use strict";

(() => {

    const user = {
        id: 123,
        name: 'Israel Israeli'
    }

    /////////////////////////////////////

    const showUser = () => {
        console.log('function started')
        setTimeout(() => {
            console.log(user)
        }, 3000)

        console.log('function finished')
    }

    document.getElementById('show-user').addEventListener('click', () => {
        console.log('event started')
        showUser()
        console.log('event finished')
    })

    //////////////////////////////////
    const getUser = (callback) => {
        console.log('function started')

        setTimeout(() => {
            callback(user)
        }, 3000)
        console.log('function finished')
        return "lior"
    }

    document.getElementById('get-user').addEventListener('click', () => {
        console.log('event started')
        const user = getUser(user => {
            console.log(user)
        })
        console.log(user)
        console.log('event finished')

    })


})()
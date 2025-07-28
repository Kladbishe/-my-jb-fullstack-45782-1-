"use strict";
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const generateWorkingDayAfterDelayAsync = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomDayOfWeek = daysOfWeek[Math.floor(Math.random() * daysOfWeek.length)]
            console.log(randomDayOfWeek)
            const index = daysOfWeek.indexOf(randomDayOfWeek)
            if (index >= 0 && index <= 4) return resolve(`today ${randomDayOfWeek} its a working day`)
            else return reject(`today ${randomDayOfWeek} it not a working day`)
        }, 1000)
    })
}
document.getElementById('button').addEventListener('click', () => {
    generateWorkingDayAfterDelayAsync().then(message => alert(message)).catch(err => alert(err))
})

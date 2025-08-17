"use strict";
(async () => {

    const myGrades = new Set()
    myGrades.add(90);
    myGrades.add(96)
    myGrades.add(72)
    console.log(myGrades)
    console.log(`the grade 96 is present in the set? ${myGrades.has(96)}`)

    const grades = [78, 82, 88, 90, 92, 92, 96, 96, 96, 96, 99];
    grades.reduce((cumulative, current) => {
        const cum = [ ...cumulative ]

        const isInArray = cum.includes(current)
        if (!isInArray) cum.push(current)
        return cumulative
    }, [])
        //use Set to do the in a single command!
        const mySet = [...new Set(grades)] //the elegant way to unique an array in JS
        console.log(mySet)

})()
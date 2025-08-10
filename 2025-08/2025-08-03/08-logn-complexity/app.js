"use strict";
(async () => {

    const numbers = [1, 9, 17, 25, 33, 49, 51, 66, 72, 82, 95]

    const searchSortedArray = (array, search) => {
        let startIndex = 0
        let finishIndex = array.length

        do {
            let currentIndex = Math.floor((startIndex + finishIndex) / 2)
            if (array[currentIndex] === search) return currentIndex

            if (array[currentIndex] > search) finishIndex = currentIndex - 1
            else startIndex = currentIndex + 1

        } while (finishIndex >= startIndex)

            return -1

    }
    const itemIndex =searchSortedArray(numbers,num)
    const num = +prompt('enter a number')

    const isInArray = numbers.includes(num)
    console.log(`${num} is ${itemIndex
         ? "included" : "not included"} in array`)

})()




const generate7BoomAfterDelayAsync = (min, max) => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            num = Math.floor(Math.random() * (max - min + 1) + min)
            console.log(num)
            if (num % 7 === 0 || num %10 === 7) resolve(`number goods ${num}`)
            else reject("numbers its not good")
        }, 1000)
    })
}

const handleClick = ()=>{
    const min=+document.getElementById('minInput').value
    const max=+document.getElementById('maxInput').value
    const result = document.getElementById('result')
    generate7BoomAfterDelayAsync(min,max).then(res => alert(res))
.catch(err => alert(err))
}


const  somePower = (num, func) =>{
    if(typeof func !=="function") alert('big error')
    console.log(`result of ${num} and ${func} is ${func(num)}`)
}

somePower(4,  (num) => {return num **2})

somePower(4,  (num) => {return num **3})

somePower(4,console.log)

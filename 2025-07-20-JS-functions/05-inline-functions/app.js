
function somePower(num, func){
    if(typeof func !=="function") alert('big error')
    console.log(`result of ${num} and ${func} is ${func(num)}`)
}

somePower(4, function power2(num){return num **2})
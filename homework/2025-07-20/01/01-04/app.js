// function randomNum(a, b, c, d, e) {
//   const num = [a, b, c, d, e]
//   const randomIndex = Math.floor(Math.random() * num.length)
//   const ranNum = num[randomIndex]
//   return ranNum

// }


function amazing(callback) {
  const num = callback(42, 128, 37, 81, 66);
  console.log('num:' + num);
}

// amazing(randomNum)




// const randomNumber = (a, b, c, d, e) => {
//   const num = [a, b, c, d, e]
//   const randomIndex = Math.floor(Math.random() * num.length)
//   const ranNum = num[randomIndex]
//   return ranNum
// }
// amazing(randomNumber)


amazing((a,b,c,d,e)=>{
  const num = [a, b, c, d, e]
  const randomIndex = Math.floor(Math.random() * num.length)
  const ranNum = num[randomIndex]
  return ranNum
})
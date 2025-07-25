const getPriceIncludingVAT = (price) => price * 1.17
const price = +prompt('enter a price')


console.log(`the price incuding Vat is is ${getPriceIncludingVAT(price)}`)
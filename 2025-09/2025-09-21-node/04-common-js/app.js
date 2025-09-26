const {sum} = require('./calculator')

const num1= process.argv[2]
const num2 =process.argv[3]
console.log(`${num1} + ${num2} = ${sum(+num1,+num2)}`)
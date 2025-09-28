const generator = require('password-generator-npm-kladbishe')
console.log(` password:  ${generator(+process.argv[2])}`)
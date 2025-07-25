const fruit = ["come", "on", "to", "jamaica", "man", "we", "can", "have", "a", "lot", "of", "fun"];

const fruits = fruit.reduce((cumulative, fruit) => `${cumulative} ${fruit}`, " ").trim()
console.log(fruits)

console.log(fruit.join(" "))
const num = [];
for (let i = 1; i <= 20; i++) {
    num.push(parseInt(Math.random() * (80 - 20 + 1) + 20))
}
for (const nums of num) {
    console.log(nums)
}
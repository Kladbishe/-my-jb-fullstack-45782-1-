function starsReversed(num) {
  for (let a = 1; a <= num; a++) {
    for (b = 1; b <= num - a + 1; b++) {
      document.write(`${b}`)
    }
    for (i = 1; i <= num - a + 1; i++) {
      document.write(`*`)
    }
    document.write(`<br>`)
  }
}

starsReversed(50)



function starsReversed(num){
  for (let i = num; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
      document.write("* ");
    }
    document.write("<br>");
  }
  
}
starsReversed(10)
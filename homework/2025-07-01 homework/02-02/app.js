const myCat = {
  Name: 'Vozi',
  Age: 3,
  Color: "taiger",
  isSterile: true
};
const cat = JSON.stringify(myCat);
alert(cat);
const yourCat = JSON.parse(cat);
for(const info in yourCat){
  document.write(`${info}: ${yourCat[info]}<br>`)
}
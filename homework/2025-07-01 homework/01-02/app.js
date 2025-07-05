const clothes = [
    {type: 't-shirt' , size: "M",  price: 50,  color: "red"},
    {type: 'hoodie' , size: "XL",  price: 70,  color: "pink"},
    {type: 'long sleeve' , size: "L",  price: 80,  color: "blue"},
    {type: 'shirt' , size: "S",  price: 60,  color: "white"},
    {type: 'trousers' , size: "XXL",  price: 40,  color: "black"},
]

for(const thing of clothes){
    document.write(`<br>`)
    for(const dress in thing ){
        document.write(` ${dress}: ${thing[dress]} <br>`)
    }
}
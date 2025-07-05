const cars = [
    {name: 'Mazda' , model: "323f",  year: 1998,  color: "red"},
    {name: 'honda' ,  model: "civic",year: 1999, color: "silver"},
    {name: 'volvo', model: "s60",year: 2011,color: "black"}
]

for(const car of cars){
    document.write(`<br>`)
    for(const oneCar in car){
        document.write(` ${oneCar}: ${car[oneCar]} <br>`)
    }
}
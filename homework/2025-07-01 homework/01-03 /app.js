
const placeOne = {
    longitude: "" ,
    latitude: ""
}
const placeTwo = {
    longitude: "" ,
    latitude: ""
}
const placeThree = {
    longitude: "" ,
    latitude: ""
}
let geolocation = [placeOne, placeTwo, placeThree];
placeOne.latitude = prompt(`enter a latitude`)
placeOne.longitude = prompt(`enter a longitude`)
placeTwo.latitude = prompt(`enter a latitude`)
placeTwo.longitude = prompt(`enter a longitude`)
placeThree.latitude = prompt(`enter a latitude`)
placeThree.longitude = prompt(`enter a longitude`)
for(const place of geolocation){
    document.write(`${place} <br>`)
    for(const info in place){
        document.write(`${info} ${place[info]}<br>`)
    }
}

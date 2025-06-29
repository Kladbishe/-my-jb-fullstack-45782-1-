const clothingItem = {
    manufacturer: 'Adidas',
    size: 'XXL',
    color: 'black',
    Price: 100,
};
document.write(`manufacturer: ${clothingItem.manufacturer} <br>
                size: ${clothingItem.size} <br>
                color: ${clothingItem.color} <br>
                Price: ${clothingItem.Price} <br>`);
document.write(`____________________ <br>`)
for (const p in clothingItem) {
    document.write(`${p}: ${clothingItem[p]} <br>`)
}
document.write(`____________________ <br>`)
clothingItem.type =prompt(`enter type of clothing`)
document.write(`manufacturer: ${clothingItem.manufacturer} <br>
                size: ${clothingItem.size} <br>
                color: ${clothingItem.color} <br>
                Price: ${clothingItem.Price} <br>
                Type: ${clothingItem.type} <br>`);
document.write(`____________________ <br>`)

for (const p in clothingItem) {
    document.write(`${p}: ${clothingItem[p]} <br>`)
}

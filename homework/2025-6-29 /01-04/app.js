const card = {
    typeCard: 'Visa',
    numberCard: '4200 4342 1232 1212',
    expirationDate: '22.03.29',
    SVV: 142,
};
document.write(`Type card: ${card.typeCard} <br>
                Number card: ${card.numberCard} <br>
                Expiration date: ${card.expirationDate} <br>
                SVV: ${card.SVV} <br>`);
document.write(`____________________ <br>`)
for (const p in card) {
    document.write(`${p}: ${card[p]} <br>`)
}


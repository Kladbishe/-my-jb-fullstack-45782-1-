const customer = {
    firstName: 'Israel',
    lastName: 'Israeli',
    mail: "Israel@gmail.com",
    phone: "0584445504",
    card: {
        typeCard: 'Visa',
        numberCard: '4200 4342 1232 1212',
        expirationDate: '22.03.29',
        СVV: 142,
    }
};
document.write(`first Name: ${customer.firstName} <br>
                last name: ${customer.lastName} <br>
                mail: ${customer.mail} <br>
                phone: ${customer.phone} <br>
                Card type: ${customer.card.typeCard} <br>
                Number card: ${customer.card.numberCard} <br>
                Expiration date: ${customer.card.expirationDate} <br>
                SVV: ${customer.card.SVV} <br>`);
document.write(`____________________ <br>`);
for (const p in customer) {
    if(typeof customer[p] ===  "object"){
        document.write(`Card information: <br>`)
         for (const key in customer.card) {
    document.write(`${key}: ${customer.card[key]} <br>`)}
    }
}

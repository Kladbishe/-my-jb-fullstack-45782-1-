class Book {
    constructor(nameBook, shop, publish, price) {
        this.nameBook = nameBook;
        this.author = shop;
        this.publish = price;
        this.price = price;
    }
    infoBook() {
        console.log(`The book ${this.nameBook} is available at ${this.author}, published in ${this.publish}, and costs about ${this.price}$.`);
    }
    priceWithVat() {
        return this.price * Book.vat;
    }
}
Book.vat = 1.18;
export default Book;

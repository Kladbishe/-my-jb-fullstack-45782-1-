export default class Book {
  nameBook: string;
  author: string;
  publish: number;
  price: number;
  static vat: number = 1.18

  constructor(nameBook: string, shop: string, publish: number, price: number) {
    this.nameBook = nameBook;
    this.author = shop;
    this.publish = price;
    this.price = price;
    
  }
    infoBook(){
        console.log(`The book ${this.nameBook} is available at ${this.author}, published in ${this.publish}, and costs about ${this.price}$.`)
    }
   priceWithVat(){
    return this.price * Book.vat
   }
}

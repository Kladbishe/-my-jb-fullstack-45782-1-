import Book from "./book.js";

const book1 = new Book("Clean Code","Prentice Hall",2008,35)
book1.infoBook()
console.log(`Price with WAT ${book1.priceWithVat()}$`)
const book2 = new Book("Design Patterns","Addison-Wesley",1994,48)
book2.infoBook()
console.log(`Price with WAT ${book2.priceWithVat()}$`)
const book3 = new Book("Algorithms Unlocked","MIT Press",2013,30)
book3.infoBook()
console.log(`Price with WAT ${book3.priceWithVat()}$`)

const booksJson = [
  {
    "Book ID": "B001",
    "Book Name": "Tel Aviv Nights",
    "Book Author": "Pushkin",
    "Book Price": 25
  },
  {
    "Book ID": "B002",
    "Book Name": "Jerusalem Tales",
    "Book Author": "Amos Oz",
    "Book Price": 32
  },
  {
    "Book ID": "B003",
    "Book Name": "Desert Dreams",
    "Book Author": "David Grossman",
    "Book Price": 29
  }
]
const books = JSON.stringify(booksJson);
alert(books);
const items = JSON.parse(books);
console.log("books:", books);
console.log("items:", items);
for (const book of items) {
    for (const key in book) {
        document.write(`${key}: ${book[key]}<br>`);
    }
    document.write('-------------------------<br>');
}
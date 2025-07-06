function message10quantify(message, quantity) {
    for (i = 1; i <= quantity; i++) {
        document.write(`${message}<br>`)
    }
};


message10quantify("mama privet это хуйня", 20);
message10quantify(prompt("enter a message"), +prompt("enter a number"));
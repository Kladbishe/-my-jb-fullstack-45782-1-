const message = prompt('enter a message');

console.log(message.substring(0, message.indexOf(' ')));
console.log(message.substring(message.lastIndexOf(' ') +1));

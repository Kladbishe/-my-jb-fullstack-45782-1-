const message = 'hello world';
const array = ['h', 'e', 'l', 'l', 'o', '', 'w', 'o', 'r', 'l', 'd']
console.log(message);
console.log(message[2]);
console.log(message[7]);
//string is an represented array of characters
message[0] = 'h', //нельзя заменять 
    array[0] = 'H'
console.log(message);

const upperCaseMessage = message.toUpperCase()
console.log(upperCaseMessage);


const lowerCaseMessage = upperCaseMessage.toLowerCase();
console.log(lowerCaseMessage);

//includes
console.log(message.includes('f'));
console.log(message.includes('ello'));
console.log(message.includes('HELLO'));
//startWith
console.log(message.startsWith('h'));
console.log(message.startsWith('H'));

//endtWith
console.log(message.endsWith('h'));
console.log(message.endsWith('1'));
console.log(message.length);

//trim

const longMessage = '     hello world     '
console.log(longMessage.length);
console.log(longMessage.trim().length);


//indexof

console.log(message.indexOf('l'));
console.log(message.indexOf('ll'));
console.log(message.indexOf('z'));
// lastIndexof

console.log(message.lastIndexOf('l'));
console.log(message.lastIndexOf('ll'));
console.log(message.lastIndexOf('z')); //-1

//substring

const veryLongMessage = 'welcome to Jamaica man, we can have a lot of fun';
console.log(veryLongMessage.substring(11,18))

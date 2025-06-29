num=+prompt('enter a number')
document.write(`${num < 0 ? 'negative' :
     num === 0 ? 'zero' :
       num >= 1 && num <= 100 ? 'The number is between 1 and 100 inclusive' :
        num >= 101 && num <= 1000  ? 'The number is between 101 and 1000 inclusive' :
         'The number is greater than 1000'}`); 

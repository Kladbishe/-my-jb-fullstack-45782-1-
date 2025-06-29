age=+prompt('enter a your age')
document.write(`${age >= 18 ? 'You can get a drivers license' : `need to wait ${18-age} more years` }`);
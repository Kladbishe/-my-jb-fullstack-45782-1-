let phone = prompt('enter a your number');
if (phone.startsWith('05') && phone.length === 10) {
    if (/^\d+$/.test(phone)) {
        document.write(`${phone} is a valid Israeli mobile number`);

    }
    else document.write(` your number ${phone} not correctly`);
}
else document.write(` your number ${phone} not correctly`);

function validate(event){
    event.preventDefault();
    console.log(`validated`);
    const password = document.getElementById('password').value;
    const hasCapitalLetters = password.toLowerCase() !== password;
    if(!hasCapitalLetters){
        document.getElementById("passwordError").innerText = "password must have capital letter"
    }

    const email = document.getElementById('email').value
    const isJohnBryceEmail = email.includes('jonhbryce')
    if(!isJohnBryceEmail){
        document.getElementById('emailError').innerText="email not correctly"
    }
    return hasCapitalLetters;
}
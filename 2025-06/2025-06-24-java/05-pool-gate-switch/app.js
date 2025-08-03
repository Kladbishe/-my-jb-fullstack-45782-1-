    const age=+prompt('enter your age');

switch(true){
    case age<4:
        price = 0;
        break;
    case age <12:
        price = 20;
        break;
    case age < 18:
        price = 30;
        break;
    case age < 65:
        price = 40;
        break;
    default:
        price = 20;
        break;
}

 alert(`your entrance free is ${price}`)
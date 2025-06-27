    const age=+prompt('enter your age');
    // if (age <=4){
    //     alert('free')
    // }
    // else if(age > 4 && age<=12){
    //     alert('pay 20 shekels')
    // }
    // else if(age > 12 && age<=18){
    //     alert('pay 30 shekels')
    // }
    // else if(age > 18 && age<=65){
    //     alert('pay 40 shekels')
    // }
    // else if(age > 65){
    //     alert('pay 20 shekel')
    // }
    let price;
    if(age <= 4) price = 0
    else if(age <= 12) price = 20
    else if(age <= 18) price = 30
    else if(age <= 65) price = 40
    else price = 20
    alert(`your entrance free is ${price}`)
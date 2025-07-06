function smile(num){
    if(num <=5){
    if(num == 1) document.write(`:-)<br>`);
    else if(num == 2) document.write(`:-(<br>`);
    else if(num == 3) document.write(`:-/<br>`);
    else if(num == 4) document.write(`;-)<br>`);
    else document.write(`;-(<br>`);
    }
    else document.write(`number not correctly`)

}
smile(1);
smile(+prompt("enter a number"))
smile(Math.floor(Math.random()*6))
function smile5(){
    for(i=1; i<=5; i++){
        smile(i)
    }
}
smile5()
function random100smile(){
    for(i=1; i <=100; i++){
       smile(Math.floor(Math.random()*6))
    }
}
random100smile()
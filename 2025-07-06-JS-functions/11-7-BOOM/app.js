const input = gerUserInput()
while(userWantsToContinue(input)){
    for(let i = 1; i <= input ; i++){
        console.log(isDividedBy7(i) || isContaining7(i) ? "BOOM" : i);
        }
        input = gerUserInput();
    }

    function isContaining7(number){
        return number.toString().includes("7")
    }
    function isDividedBy7(number){
        return number % 7 === 0;
    }
    function gerUserInput(){
        return +prompt("enter high limit for the game");
    }
    function userWantsToContinue(input){
        return input !== 0;

    }
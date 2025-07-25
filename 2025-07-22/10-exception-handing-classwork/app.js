const Js = prompt("enter JS code")

try{
    eval(Js)
}
catch(err){
    console.log(`your code is wrong, here is why: Invalid or unexpected token`)
}
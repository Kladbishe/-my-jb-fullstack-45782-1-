//  function randomNu(){ 
//   document.getElementById("num").innerHTML = parseInt(Math.random() *100+1);
//  }
 function cool(callback) {
	callback();
}
// cool(randomNu)


// const coolNew = () =>{
//       document.getElementById("num").innerHTML = parseInt(Math.random() *100+1);
// }

cool(()=>{
    document.getElementById("num").innerHTML = parseInt(Math.random() *100+1);
})
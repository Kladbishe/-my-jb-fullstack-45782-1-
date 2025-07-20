// function num(value) {
//   document.getElementById('num').innerHTML = value;
// }

function nice(callback) {
  callback(42);
}

// nice(num); 



// const ice= (value) => {
//       document.getElementById('num').innerHTML = value;
// }
// nice(ice)


nice((value)=>{
     document.getElementById('num').innerHTML = value; 
})
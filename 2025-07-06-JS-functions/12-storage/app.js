const  user = {
    id: 232,
    name: "israel"
}

// document.cookie = JSON.stringify(user)
// sessionStorage.setItem('userdata', JSON.stringify(user));

let numOfVisits = localStorage.getItem('numberOfVisits') || 0;
numOfVisits++;
localStorage.setItem("numOfVisits" ,numOfVisits )
console.log(numOfVisits);
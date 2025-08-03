"use strict";

(async () => {
    const getData = url => fetch(url).then(response => response.json())
    const data = await getData('https://dummyjson.com/users')
    const myData = [...data.users]
    console.log(myData)
    document.getElementById('button').addEventListener('click', () => {
        const ul = document.getElementById("ul")
           ul.innerHTML = '';
           myData.forEach(user => {
            ul.innerHTML += `<li>${user.firstName} ${user.lastName}</li>`
          
        })
    })
})()
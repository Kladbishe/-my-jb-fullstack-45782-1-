"use strict";
(async () => {
    document.getElementById('Search').addEventListener('click', async (event) => {
        event.preventDefault()
        const indexID = +document.getElementById('id').value

        const users = await fetchData()
        const user = users.find(user => user.id === indexID)
        if (!user) {
            document.getElementById('div').innerHTML = `<h1>User not found</h1>`
            return
        }
        const html = generateHTML(user)
        renderUsersHTML(html)
    })


    const getData = url => fetch(url).then(response => response.json())

    //short version

    const fetchData = async () => getData('https://jsonplaceholder.typicode.com/users');
    

    const generateHTML = ({ name, username, email, phone, address: { street, zipcode, city }, company: { name: companyName } }) => {
        return `
        <br><h1>${name}</h1>
        <h2>${username}</h2>
        <h3>${email}</h3>
        <h3>${phone}</h3>
        <h3>${city}</h3>
        <h3>${street}</h3>
        <h3>${zipcode}</h3>
        <h3>${companyName}</h3><br>
    `
    }




    const renderUsersHTML = html => {
        document.getElementById('div').innerHTML = html
    }






})()
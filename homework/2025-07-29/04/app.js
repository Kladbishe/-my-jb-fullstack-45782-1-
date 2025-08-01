"use strict";
(async () => {

    const getData = url => fetch(url).then(response => response.json())

    const fetchData = async () => {
        const users = await getData('https://jsonplaceholder.typicode.com/users');
        return users
    }

    const generateHTML = (users) => {
        const html = users
            .map(({ id, name }) => `
        
                <option value="${id}">${name}</option>
        
        `).join('')
        return html
    }
    const renderUsersHTML = html => {
        document.getElementById('select').innerHTML += html
    }

    const generateHTMLUser = ({ name, username, email, phone, address: { street, zipcode, city }, company: { name: companyName } }) => {
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
    const renderUserHTML = html => {
        document.getElementById('div').innerHTML = html
    }

    const users = await fetchData()
    const html = generateHTML(users)
    renderUsersHTML(html)
    document.getElementById('select').addEventListener('change', async (event) => {
        const selectedId = +event.target.value
        const user = await getData(`https://jsonplaceholder.typicode.com/users/${selectedId}`)
        const htmlUser = generateHTMLUser(user)
        renderUserHTML(htmlUser)
    })




}



)()


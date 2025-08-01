"use strict";
(async () => {
    const getData = url => fetch(url).then(response => response.json())

    const fetchData = async () => {
        const users = await getData('https://jsonplaceholder.typicode.com/users');
        return users
    }

    const generateHTML = (users) => {
        const html = users
            .map(({ name, username, email, phone, address: { street, zipcode, city, }, company: { name: companyName } }) => `
        
                <tr>
            <td>${name}</td>
            <td>${username}</td>
            <td> ${email} </td>
            <td> ${phone}</td>
            <td>${city}</td>
            <td>${street} </td>
            <td>${zipcode}</td>
            <td>${companyName}</td>
        </tr>
        
        `).join('')
        return html
    }
    const renderUsersHTML = html => {
        document.getElementById('body').innerHTML += html
    }

    const users = await fetchData()
    const html =  generateHTML(users)
    renderUsersHTML(html)
})()
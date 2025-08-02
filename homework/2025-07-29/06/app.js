"use strict";
(async () => {
    const getData = url => fetch(url).then(response => response.json())

    const fetchData = async () => {
        const data = await getData('https://dummyjson.com/users');
        return data.users
    }

    const generateHTML = (users) => {
        const html = users
            .map(({ firstName, lastName, email,image}) => `
        
                <tr>
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td> ${email} </td>
            <td><img src="${image}" width="100" alt=""></td>

        </tr>
        
        `).join('')
        return html
    }
    const renderUsersHTML = html => {
        document.getElementById('body').innerHTML += html
    }

    const data = await fetchData()
    const html =  generateHTML(data)
    renderUsersHTML(html)
})()
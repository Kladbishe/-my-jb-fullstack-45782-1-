"use strict";

(async () => {

    const getData = url => fetch(url).then(response => response.json())

    const fetchUsers = async () => {
        const { users } = await getData('https://dummyjson.com/users')
        return users
    }

    const generateUsersHTML = (users) => {
        const html = users
            .map(({ firstName, lastName, image }) =>
        `<tr>
            <td>${firstName} ${lastName}</td>
            <td><img src="${image}" width="100"></td>
        </tr>`)
            .join('')

        return html
    }
    const renderUsersHTML = html => {
        document.getElementById('table').innerHTML += html
    }


    const users = await fetchUsers()
    const html = generateUsersHTML(users)
    renderUsersHTML(html)


})()
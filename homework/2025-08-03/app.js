"use strict";

(async () => {
    const getData = url => fetch(url).then(response => response.json())

    const fetchData = async () => {
        const { users } = await getData('https://dummyjson.com/users?limit=100');
        return users
    }
    const users = await fetchData()

    const birthMonth = ({ birthDate }) => {
        return new Date(birthDate).getMonth() + 1;

    }
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const months = users.map(user => birthMonth(user)).reduce((cumulative, months) => {
        cumulative[months] = (cumulative[months] || 0) + 1
        return cumulative
    }, {})
    const sorted = Object.entries(months).sort((a, b) => b[1] - a[1])
    const generateHTML = sorted =>{
        return sorted.map(([monthNumber,count]) =>
        `
            <tr>
                <td>${monthNames[monthNumber - 1]}</td>
                <td>${count}</td>
            </tr>
        `).join('')
  }
    const renderUsersHTML = html => {
        document.getElementById('topMonthToBirth').innerHTML = html
    }
    const html = generateHTML(sorted)
    renderUsersHTML(html)
})()


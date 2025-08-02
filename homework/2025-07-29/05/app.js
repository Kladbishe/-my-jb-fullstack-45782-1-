"use strict";
(async () => {

    const getData = url => fetch(url).then(response => response.json())

    const fetchData = async() => {
        const pizzas = await getData('https://dummyjson.com/recipes');
        return pizzas.recipes
    }

    const generateHTML = (pizzas) => {
        const html = pizzas
            .map(({ id, name, image }) => `
         <tr>
            <td>${id}</td>
            <td>${name}</td>
            <td><img src="${image}" width="100" alt=""></td>
        </tr>
        
        `).join('')
        return html
    }
    const renderUsersHTML = html => {
        document.getElementById('tbody').innerHTML += html
    }





    document.getElementById('button').addEventListener("click", async () => {
        const pizzas = await fetchData()
        const html = generateHTML(pizzas)
        renderUsersHTML(html)
    })



}



)()


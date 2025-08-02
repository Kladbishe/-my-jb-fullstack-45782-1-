"use strict";
(async () => {
    const getData = url => fetch(url).then(res => res.json())

    const generateHTML = (data) => {
        return `
            <h2>Weather in ${data.location.name}</h2>
            <p>Temperature: ${data.current.temp_c}°C</p>
            <p>Condition: ${data.current.condition.text}</p>
            <img src="https:${data.current.condition.icon}" alt="weather icon">
        `
    }

    const renderHTML = html => {
        document.getElementById('result').innerHTML = html
    }

    document.getElementById('city').addEventListener('change', async (event) => {
        const selectedCity = event.target.value
        const data = await getData(`https://api.weatherapi.com/v1/current.json?key=165e6d19bc8b4b65b66153151250208&q=${selectedCity}`)
        const html = generateHTML(data)
        renderHTML(html)
    })
})()

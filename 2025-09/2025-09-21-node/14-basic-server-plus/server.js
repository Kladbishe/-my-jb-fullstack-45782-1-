const { createServer } = require('http')

const PORT = process.env.PORT || 3000

function productsToXML(products) {
    let xml = "<products>";
    for (let p of products) {
        xml += `
        <product>
            <id>${p.id}</id>
            <name>${p.name}</name>
            <price>${p.price}</price>
            <color>${p.color}</color>
        </product>`;
    }
    xml += "</products>";
    return xml;
}

const requestHandler = (request, response) => {

    switch (request.url) {
        case '/':
            switch (request.method) {
                case "GET":
                    response.end("hello world")
                    break;
                default:
                    response.writeHead(404).end('not found')
            }
            break;
        case "/users":
            switch (request.method) {
                case "GET":
                    response.setHeader('Content-Type', 'application/json')
                    response.end(JSON.stringify(users))
                    break;
                case "POST":
                    console.log("saving user")
                    response.end("user saved")
                    break
                default:
                    response.writeHead(404).end('not found')
            }
            break
        case "/product":
            switch (request.method) {
                case "GET":
                    response.setHeader('Content-Type', 'application/xml')
                    response.end(productsToXML(products))
                    break;
                case "POST":
                    console.log("saving product…")
                    response.end("product saved")
                    break
                default:
                    response.writeHead(404).end('not found')
            }
            break;
        default:
            response.writeHead(404).end('not found')

    }
}
const users = [
    {
        id: 1,
        name: "Bob",
    }, {
        id: 2,
        name: "Alice",
    }, {
        id: 3,
        name: "Diana",
    }
]
const products = [
    {
        id: 1,
        name: "iphone 16",
        price: 1500,
        color: 'red'
    }, {
        id: 2,
        name: "iphone 17 pro",
        price: 2000,
        color: 'orange'
    }, {
        id: 3,
        name: "airpods",
        price: 500,
        color: 'white'
    }
]

createServer(requestHandler).listen(PORT, () => console.log(`server started on port ${PORT}.....`))
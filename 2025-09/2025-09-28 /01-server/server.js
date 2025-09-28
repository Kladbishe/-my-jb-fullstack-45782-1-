const { createServer } = require('http')


const PORT = process.env.PORT || 3000

const users = [
    {
        id: 1,
        name: 'Bob',
    },
    {
        id: 2,
        name: 'Alice',
    },
    {
        id: 3,
        name: 'Diana',
    }
]
const products =[
    {
        id: 1,
        nike: 'Nike',
        price: '1000'

    },
    {
        id: 2,
        nike: 'Puma',
        price: '1300'

    },
    {
        id: 3,
        nike: 'Adidas',
        price: '2000'

    },
]

    const logRequest = () =>{
        console.log('logging request....')
    }

    const connectMySQL = () =>{
        console.log("connected Sql")
    }
    const disconnectMySQL = () => {
        console.log('disconnect....sql')
    }

const requestHandler = (request, response) => {
    console.log(`url is ${request.url} and method is ${request.method}`)

    logRequest()

    switch (request.url) {
        case '/':
            switch (request.method) {
                case 'GET':
                    response.end('hello world')
                    break;
                default:
                    response.writeHead(404).end('not found')
                    break
            }
            break;
        case '/users':
            connectMySQL()
            switch (request.method) {
                case 'GET':
                    response.setHeader('Content-Type', 'application/json')
                    response.end(JSON.stringify(users))
                    break;
                case "POST":
                    console.log('saving user....')
                    response.writeHead(201)
                    response.end("saved user")
                    break;
                default:
                    response.writeHead(404).end('not found')
                    break
            }
            disconnectMySQL()
            break;
        case "/products":
            switch(request.method){
                case "GET":
                    response.setHeader('Content-Type', 'application/xml')
                    response.end("<product>shoe</product>")
                    break
                case "POST":
                    response.writeHead(201)
                    response.end("saving product")
                    break;
            }
            break;
        default:
            response.writeHead(404).end('not found')
            break;
    }
}


createServer(requestHandler).listen(PORT, () => console.log(`server started on port ${PORT}...`))
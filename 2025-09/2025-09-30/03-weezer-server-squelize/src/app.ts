import express from 'express'
import logger from './middlewares/error/logger'
import responder from './middlewares/error/responder'
import notFound from './middlewares/not-found'
import profileRouter from './routers/profile'
import config from 'config'
import sequelize from './db/sequelize'


const port = config.get<number>('app.port')
const appName = config.get<string>('app.name')
const secret = config.get<string>('app.secret')

console.log(`app secret is ${secret}`)

const app = express()

//load routers
app.use('/profile', profileRouter)

//Not-found
app.use(notFound)
//error middlewares
app.use(logger)
app.use(responder)

sequelize.sync({force: true})



app.listen(port,()=>console.log(`${appName} started on port: ${port}`))


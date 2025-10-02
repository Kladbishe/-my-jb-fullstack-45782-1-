import express, { NextFunction, Request, Response } from 'express'

const app = express()

function logRequest(req: Request, res: Response, next: NextFunction){
    console.log("logging request very good gooooooods")
}
app.use('/', logRequest)

app.listen(3000)
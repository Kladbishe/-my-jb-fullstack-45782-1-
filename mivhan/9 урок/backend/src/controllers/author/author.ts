import { NextFunction, Request, Response } from "express";
import Author from "../../models/Authors";



export async function getAll(req: Request, res: Response, next: NextFunction) {
    try{
        const audiences = await Author.findAll()
        res.json(audiences)
    }catch(e){
        next(e)
    }
}
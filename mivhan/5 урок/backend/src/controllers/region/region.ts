import { NextFunction, Request, Response } from "express";
import Region from "../../models/Region";



export async function getAll(req: Request, res: Response, next: NextFunction) {
    try{
        const regions = await Region.findAll()
        res.json(regions)
    }catch(e){
        next(e)
    }
}
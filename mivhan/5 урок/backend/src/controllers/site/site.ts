import { NextFunction, Request, Response } from "express";
import Region from "../../models/Region";
import Site from "../../models/Site";


export async function filterByRegions(req: Request<{regionId: string}>, res: Response, next: NextFunction) {
    try{
        const {games} = await Region.findByPk(req.params.regionId,{
            include: [Site]
        })
        res.json(games)
    }catch(e){
        next(e)
    }
}


export async function createGame(req: Request, res: Response, next: NextFunction) {

    try {
        const newSite = await Site.create(req.body)
        await newSite.reload({include: Region})
        res.json(newSite)
    } catch (e) {
        next(e)
    }
}


export async function deleteSite(req: Request<{ id: string }>, res: Response, next: NextFunction) {
  try {
    const site = await Site.findByPk(req.params.id);

    if (!site) {
      return res.status(404).json({ message: "Site not found" });
    }

    await site.destroy();

    
  } catch (e) {
    next(e);
  }
}



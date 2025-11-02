import { Router } from "express";
import paramValidation from "../middlewares/param-validation";
import { createSiteValidator, deleteSiteValidator, sitesByRegionValidator } from "../controllers/site/validator";
import { createGame, deleteSite, filterByRegions } from "../controllers/site/site";
import validation from "../middlewares/validation";


const router = Router()

router.get('/by-site/:regionId', paramValidation(sitesByRegionValidator), filterByRegions)
router.post('/', validation(createSiteValidator), createGame)
router.delete("/delete/:id",
  (req, _res, next) => { console.log("URL:", req.originalUrl, "| id:", req.params.id, "| len:", req.params.id?.length); next(); },
  paramValidation(deleteSiteValidator),
  deleteSite
);


export default router
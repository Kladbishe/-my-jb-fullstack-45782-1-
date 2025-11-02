import { Router } from "express";

import { createGame, filterByAudience, filterByMaxPrice } from "../controllers/games/controller";
import paramValidation from "../middlewares/param-validation";
import { createGameValidator, gamesByAudienceIdValidator } from "../controllers/games/validator";
import validation from "../middlewares/validation";

const router = Router()

router.get("/by-audience/:audienceId",paramValidation(gamesByAudienceIdValidator) ,filterByAudience)
router.get('/by-max-price',filterByMaxPrice)
router.post('/', validation(createGameValidator), createGame)

export default router
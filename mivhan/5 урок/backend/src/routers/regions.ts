import { Router } from "express";
import { getAll } from "../controllers/region/region";


const router = Router()

router.get('/', getAll)

export default router
import { Router } from "express";
import { getAll } from "../controllers/author/author";


const router = Router()

router.get("/authors", getAll)



export default router
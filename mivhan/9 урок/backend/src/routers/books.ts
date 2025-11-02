import { Router } from "express";
import { createBook, deleteBook, searchBooks } from "../controllers/book/book";
import validation from "../middlewares/validation";
import { createBookValidator } from "../controllers/book/validator";



const router = Router()

router.post('/create',validation(createBookValidator) ,createBook)
router.delete('/delete/:id', deleteBook)
router.get("/search", searchBooks);

export default router
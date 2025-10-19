import { Router } from "express";
import { newComment } from "../controllers/comment/controller";
import { newCommentValidator } from "../controllers/comment/validator";
import validation from "../middlewares/validation";

const router = Router()

router.post('/:postId',validation(newCommentValidator),newComment)

export default router
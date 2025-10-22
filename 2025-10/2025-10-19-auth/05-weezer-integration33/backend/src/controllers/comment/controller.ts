import { NextFunction, Request, Response } from "express";
import Comment from "../../models/Comment";
import User from "../../models/User";

export async function newComment(req: Request<{ postId: string }>, res: Response, next: NextFunction) {


    try {

        const { postId } = req.params
        const newComment = await Comment.create({ ...req.body,userId :req.userId, postId })
        await newComment.reload({
            include: [User]
        })
        res.json(newComment)
    } catch (e) {
        next(e)
    }

}
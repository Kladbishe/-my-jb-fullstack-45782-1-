import Joi from "joi";


export const createBookValidator = Joi.object({
    authorId: Joi.string().uuid().required(),
    bookName: Joi.string().min(2).max(255).required(),
    numOfPages: Joi.number().min(5).required(),
    price: Joi.number().min(0).required()
})
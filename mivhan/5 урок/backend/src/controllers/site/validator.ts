import Joi from "joi";

export const sitesByRegionValidator = Joi.object({
    regionId: Joi.string().uuid().required()
})

export const createSiteValidator = Joi.object({
    regionId: Joi.string().uuid().required(),
    name: Joi.string().min(2).max(255).required(),
    description: Joi.string().min(2).required(),
    priceAdult: Joi.number().min(1).required(),
    priceChild: Joi.number().min(1).required()
})

export const deleteSiteValidator = Joi.object({
  id: Joi.string().uuid().required()
})
import Joi from "joi";

export const addtodovalidator = Joi.object({
  title: Joi.string().required(),
  icon: Joi.string().required(),
});

export const updatetodovalidator = Joi.object({
  title: Joi.string(),
  icon: Joi.string(),
  completed: Joi.boolean(),
});


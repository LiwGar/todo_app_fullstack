import Joi from 'joi';

const id = Joi.number().integer();
const name = Joi.string().min(3).max(21);

const createCategorySchema = Joi.object({
  name: name.required(),
});

const getCategorySchema = Joi.object({
  id: id.required(),
});

const updateCategorySchema = Joi.object({
  name: name,
});

export { createCategorySchema, getCategorySchema, updateCategorySchema};


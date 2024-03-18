const Joi = require('joi');

const id = Joi.number().integer();
const title = Joi.string().min(3);
const description = Joi.string().min(10);
const categoryId = Joi.string().min(3);

const createTaskSchema = Joi.object({
  title: title.required(),
  description: description.required(),
  categoryId: categoryId.required(),
});

const getTaskSchema = Joi.object({
  id: id.required(),
});

const updateTaskSchema = Joi.object({
  title: title,
  description: description,
  categoryId: categoryId
});

module.exports = { createTaskSchema, getTaskSchema, updateTaskSchema };
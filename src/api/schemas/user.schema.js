const Joi = require('joi');

const id = Joi.number().integer();
const fullName = Joi.string().min(8).max(45);
const email = Joi.string().email();
const password = Joi.string().min(8);

const createUserSchema = Joi.object({
  fullName: fullName.required(),
  email: email.required(),
  password: password.required(),
});

const getUserSchema = Joi.object({
  id: id.required(),
});

const updateUserSchema = Joi.object({
  fullName: fullName,
  email: email,
});

module.exports = { createUserSchema, getUserSchema, updateUserSchema };
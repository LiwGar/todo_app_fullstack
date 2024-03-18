const express = require('express');
const UserService = require('./../services/user.service.js');
const  validatorHandler = require('./../middlewares/validator.handler.js');
const { createUserSchema, getUserSchema, updateUserSchema } = require('./../schemas/user.schema.js');

const router = express.Router();
const service = new UserService;

router.get('/', async (req, res, next) => {
  try {
    const users = await service.findUsers();
    res.json(users);
  } catch (error) {
    next(error);
  }
});

router.get('/:id',
validatorHandler(getUserSchema, 'params'), 
  async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await service.findOneUser(id);
    res.json(user);
  } catch (error) {
    next(error);
  }
});

router.post('/', 
validatorHandler(createUserSchema, 'body'),  
  async (req, res, next) => {
  try {
    const body = req.body;
    const newUser = await service.createUser(body);
    res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
});


router.patch('/:id', 
validatorHandler(getUserSchema, 'params'),
validatorHandler(updateUserSchema, 'body'),
  async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const user = await service.updateUser(id, body);
    res.json(user);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', 
validatorHandler(getUserSchema, 'params'),
  async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await service.deleteUser(id);
    res.json(user);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
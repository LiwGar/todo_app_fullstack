import express from 'express'; 
import { findUsers, findOneUser, createUser, updateUser, deleteUser } from './../services/user.service.js';
import { validatorHandler } from './../middlewares/validator.handler.js';
import { createUserSchema, getUserSchema, updateUserSchema } from './../schemas/user.schema.js';

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const users = await findUsers();
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
    const user = await findOneUser(id);
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
    const newUser = await createUser(body);
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
    const user = await updateUser(id, body);
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
    const user = await deleteTask(id);
    res.json(user);
  } catch (error) {
    next(error);
  }
});

export { router as userRouter };
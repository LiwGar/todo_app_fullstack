import express from 'express'; 
import { findTasks, findOneTask, createTask, updateTask, deleteTask } from './../services/task.service.js';
import { validatorHandler } from './../middlewares/validator.handler.js';
import { createTaskSchema, getTaskSchema, updateTaskSchema } from './../schemas/task.schema.js';

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const tasks = await findTasks();
    res.json(tasks);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', 
validatorHandler(getTaskSchema, 'params'),
  async (req, res, next) => {
  try {
    const { id } = req.params;
    const task = await findOneTask(id);
    res.json(task);
  } catch (error) {
    next(error);
  }
});

router.post('/', 
validatorHandler(createTaskSchema, 'body'),
  async (req, res, next) => {
  try {
    const body = req.body;
    const newTask = await createTask(body);
    res.status(201).json(newTask);
  } catch (error) {
    next(error);
  }
});
router.patch('/:id', 
validatorHandler(getTaskSchema, 'params'),
validatorHandler(updateTaskSchema, 'body'),
  async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const task = await updateTask(id, body);
    res.json(task);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', 
validatorHandler(getTaskSchema, 'params'),  
  async (req, res, next) => {
  try {
    const { id } = req.params;
    const task = await deleteTask(id);
    res.json(task);
  } catch (error) {
    next(error);
  }
});


export { router as taskRouter };
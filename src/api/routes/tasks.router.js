const express = require('express');
const TaskService = require('./../services/task.service.js');
const  validatorHandler = require('./../middlewares/validator.handler.js');
const { createTaskSchema, getTaskSchema, updateTaskSchema } = require('./../schemas/task.schema.js');

const router = express.Router();
const service = new TaskService(); 

router.get('/', async (req, res, next) => {
  try {
    const tasks = await service.findTasks();
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
    const task = await service.findOneTask(id);
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
    const newTask = await service.createTask(body);
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
    const task = await service.updateTask(id, body);
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
    const task = await service.deleteTask(id);
    res.json(task);
  } catch (error) {
    next(error);
  }
});


module.exports = router;
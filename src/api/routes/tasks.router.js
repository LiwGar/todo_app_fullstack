import express from 'express'; 
import { findTasks, findOneTask, createTask, updateTask, deleteTask } from './../services/task.service.js';

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const tasks = await findTasks();
    res.json(tasks);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const task = await findOneTask(id);
    res.json(task);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const body = req.body;
    const newTask = await createTask(body);
    res.status(201).json(newTask);
  } catch (error) {
    next(error);
  }
});
router.patch('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const task = await updateTask(id, body);
    res.json(task);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const task = await deleteTask(id);
    res.json(task);
  } catch (error) {
    next(error);
  }
});


export { router as taskRouter };
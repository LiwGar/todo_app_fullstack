import express from 'express'; 
import { findTasks, findOneTask, createTask, updateTask, deleteTask } from './../services/task.service.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const tasks = await findTasks();
    res.json(tasks);
  } catch (error) {
    console.error('Error fetching tasks:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/:id', findOneTask);

router.post('/', createTask);

router.patch('/:id', updateTask);

router.delete('/:id', deleteTask);


export { router as taskRouter };
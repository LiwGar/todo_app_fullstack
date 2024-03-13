import express from 'express'; 
import { findTasks, findOneTask, createTask, updateTask, deleteTask } from './../services/task.service.js';

const router = express.Router();

router.get('/', findTasks);

router.get('/:id', findOneTask);

router.post('/', createTask);

router.patch('/:id', updateTask);

router.delete('/:id', deleteTask);


export { router as taskRouter };
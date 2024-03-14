import {  pool } from './../../libs/postgres.pool.js';

const findTasks = async () => {
  const query = 'SELECT * FROM tasks';
  const rta = await pool.query(query)
  return rta.rows;
};

const findOneTask = (req, res) => {
  res.send('one task');
};

const createTask = (req, res) => {
  res.send('task created');
};

const updateTask = (req, res) => {
  res.send('task updated');
};

const deleteTask = (req, res) => {
  res.send('task deleted');
};

export { findTasks, findOneTask, createTask, updateTask, deleteTask };

import {  getConnection } from './../../libs/postgres.js';

const findTasks = async () => {
  const client = await getConnection();
  const rta = await client.query('SELECT * FROM tasks')
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

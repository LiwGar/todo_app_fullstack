import {  sequelizeConnection } from './../../libs/sequelize.js';

const findTasks = async () => {
  const query = 'SELECT * FROM tasks';
  const [data] = await sequelizeConnection.query(query)
  return data;
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

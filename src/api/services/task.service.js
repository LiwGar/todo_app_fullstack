import boom from '@hapi/boom';
import {  sequelizeConnection } from './../../libs/sequelize.js';

const findTasks = async () => {
  const query = 'SELECT * FROM tasks';
  const [data] = await sequelizeConnection.query(query)
  return data;
};

const findOneTask = async (id) => {
  const query = 'SELECT * FROM tasks WHERE id = ?';
  const [data] = await sequelizeConnection.query(query, [id]);
  if(!data || data.length === 0) {
    throw boom.notFound('Task not found');
  }
  return data[0];
};

const createTask = (data) => {
};

const updateTask = (req, res) => {
  res.send('task updated');
};

const deleteTask = (req, res) => {
  res.send('task deleted');
};

export { findTasks, findOneTask, createTask, updateTask, deleteTask };

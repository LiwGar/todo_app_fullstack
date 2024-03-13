const findTasks = (req, res) => {
  res.send('all tasks');
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

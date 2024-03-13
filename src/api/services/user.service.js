const findUsers = (req, res) => {
  res.send('all Users');
};

const findOneUser = (req, res) => {
  res.send('one User');
};

const createUser = (req, res) => {
  res.send('User created');
};

const updateUser = (req, res) => {
  res.send('User updated');
};

const deleteUser = (req, res) => {
  res.send('User deleted');
};

export { findUsers, findOneUser, createUser, updateUser, deleteUser };
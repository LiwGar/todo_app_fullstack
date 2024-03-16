import { User }  from './../../db/models/user.model.js';

async function findUsers() {
  const rta = await User.findAll();
  return rta;
}

function findOneUser(req, res) {
  res.send('one User');
};

function createUser(req, res) {
  res.send('User created');
};

function updateUser(req, res) {
  res.send('User updated');
};

function deleteUser(req, res) {
  res.send('User deleted');
};

export { findUsers, findOneUser, createUser, updateUser, deleteUser };
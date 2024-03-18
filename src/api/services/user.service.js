import boom from '@hapi/boom';
import { User }  from './../../db/models/user.model.js';

async function createUser(data) {
  const newUser = await User.create(data);
  return newUser;
};

async function findUsers() {
  const rta = await User.findAll();
  return rta;
}

async function findOneUser(id) {
  const user = await User.findByPk(id);
  if (!user){
    throw boom.notFound('User not found');
  };
  return user;
}

async function updateUser(id, changes) {
  const user = await this.findOneUser(id);
  const rta = await user.update(changes);
  return rta;
};

async function deleteUser(id) {
  const user = await this.findOneUser(id);
  await user.destroy();
  return { id };
};

export { findUsers, findOneUser, createUser, updateUser, deleteUser };
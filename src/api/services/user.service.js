const boom = require('@hapi/boom');
const { User } = require('./../../db/models/user.model.js');

class UserService {
  constructor() {};

  async createUser(data) {
    const newUser = await User.create(data);
    return newUser;
  };
  
  async findUsers() {
    const rta = await User.findAll();
    return rta;
  }
  
  async findOneUser(id) {
    const user = await User.findByPk(id);
    if (!user){
      throw boom.notFound('User not found');
    };
    return user;
  }
  
  async updateUser(id, changes) {
    const user = await this.findOneUser(id);
    const rta = await user.update(changes);
    return rta;
  };
  
  async deleteUser(id) {
    const user = await this.findOneUser(id);
    await user.destroy();
    return { id };
  };
}

module.exports = UserService;
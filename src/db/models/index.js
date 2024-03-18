const { UserSchema, User } = require('./user.model.js');
const { TaskSchema, Task } = require('./task.model.js');
const { CategorySchema, Category } = require('./category.model.js');

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Task.init(TaskSchema, Task.config(sequelize));
  Category.init(CategorySchema, Category.config(sequelize));
}

module.exports = setupModels ;
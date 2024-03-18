import { UserSchema, User } from './user.model.js';
import { TaskSchema, Task } from './task.model.js';
import { CategorySchema, Category } from './category.model.js';

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Task.init(TaskSchema, Task.config(sequelize));
  Category.init(CategorySchema, Category.config(sequelize));
}

export { setupModels };
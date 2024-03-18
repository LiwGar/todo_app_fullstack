import boom from '@hapi/boom';
import { Task }  from './../../db/models/task.model.js';

class TaskService {

  constructor() {}; 

  async createTask(data) {
    const newTask = await Task.create(data);
    return newTask;
  };
  
  async findTasks() {
    const rta = await Task.findAll();
    return rta;
  };
  
  async findOneTask(id) {
    const task = await Task.findByPk(id);
    if (!task){
      throw boom.notFound('Task not found');
    };
    return task;
  };
  
  async updateTask(id, changes) {
    const task = await this.findOneTask(id);
    const rta = await task.update(changes);
    return rta;
  }; 
  
  async deleteTask(id) {
    const task = await this.findOneTask(id);
    await task.destroy();
    return { id };
  };
}

export { TaskService };

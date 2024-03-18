const boom = require('@hapi/boom');
const { Category }  = require('./../../db/models/category.model.js');

class CategoryService {
  constructor(){};

  async createCategory(data) {
    const newCategory = await Category.create(data);
    return newCategory;
  };
  
  async findCategories() {
    const rta = await Category.findAll();
    return rta;
  };
  
  async findOneCategory(id) {
    const category = await Category.findByPk(id);
    if (!category){
      throw boom.notFound('Category not found');
    };
    return category;
  };
  
  async updateCategory(id, changes) {
    const category = await this.findOneCategory(id);
    const rta = await category.update(changes);
    return rta;
  }; 
  
  async deleteCategory(id) {
    const category = await this.findOneCategory(id);
    await category.destroy();
    return { id };
  };
}

module.exports = CategoryService;
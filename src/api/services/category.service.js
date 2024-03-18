import boom from '@hapi/boom';
import { Category }  from './../../db/models/category.model.js';

async function createCategory(data) {
  const newCategory = await Category.create(data);
  return newCategory;
};

async function findCategories() {
  const rta = await Category.findAll();
  return rta;
};

async function findOneCategory(id) {
  const category = await Category.findByPk(id);
  if (!category){
    throw boom.notFound('Category not found');
  };
  return category;
};

async function updateCategory(id, changes) {
  const category = await findOneCategory(id);
  const rta = await category.update(changes);
  return rta;
}; 

async function deleteCategory(id) {
  const category = await findOneCategory(id);
  await category.destroy();
  return { id };
};

export { findCategories, findOneCategory, createCategory, updateCategory, deleteCategory };
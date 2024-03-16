import { Category }  from './../../db/models/category.model.js';

async function findCategories() {
  const rta = await Category.findAll();
  return rta;
}

const findOneCategory = (req, res) => {
  res.send('one Category');
};

const createCategory = (req, res) => {
  res.send('Category created');
};

const updateCategory = (req, res) => {
  res.send('Category updated');
};

const deleteCategory = (req, res) => {
  res.send('Category deleted');
};

export { findCategories, findOneCategory, createCategory, updateCategory, deleteCategory };
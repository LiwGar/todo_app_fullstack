const express = require('express');
const CategoryService = require('./../services/category.service.js');
const  validatorHandler = require('./../middlewares/validator.handler.js');
const { createCategorySchema, getCategorySchema, updateCategorySchema} = require('./../schemas/category.schema.js');

const router = express.Router();
const service = new CategoryService();

router.get('/',  async (req, res, next) => {
  try {
    const categories = await service.findCategories();
    res.json(categories);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', 
validatorHandler(getCategorySchema, 'params'), 
async (req, res, next) => {
try {
  const { id } = req.params;
  const category = await service.findOneCategory(id);
  res.json(category);
} catch (error) {
  next(error);
}
});

router.post('/', 
validatorHandler(createCategorySchema, 'body'),  
async (req, res, next) => {
try {
  const body = req.body;
  const newCategory = await service.createCategory(body);
  res.status(201).json(newCategory);
} catch (error) {
  next(error);
}
});


router.patch('/:id', 
validatorHandler(getCategorySchema, 'params'),
validatorHandler(updateCategorySchema, 'body'),
  async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const category = await service.updateCategory(id, body);
    res.json(category);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', 
validatorHandler(getCategorySchema, 'params'),
async (req, res, next) => {
try {
  const { id } = req.params;
  const category = await service.deleteCategory(id);
  res.json(category);
} catch (error) {
  next(error);
}
});

module.exports = router;
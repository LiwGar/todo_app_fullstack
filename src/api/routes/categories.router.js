import express from 'express'; 
import { findCategories, findOneCategory, createCategory, updateCategory, deleteCategory } from './../services/category.service.js'
import { validatorHandler } from './../middlewares/validator.handler.js';
import { createCategorySchema, getCategorySchema, updateCategorySchema} from './../schemas/category.schema.js';

const router = express.Router();

router.get('/', findCategories);

router.get('/:id', 
validatorHandler(getCategorySchema, 'params'), 
async (req, res, next) => {
try {
  const { id } = req.params;
  const category = await findOneCategory(id);
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
  const newCategory = await createCategory(body);
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
    const category = await updateCategory(id, body);
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
  const category = await deleteCategory(id);
  res.json(category);
} catch (error) {
  next(error);
}
});

export { router as categoryRouter };
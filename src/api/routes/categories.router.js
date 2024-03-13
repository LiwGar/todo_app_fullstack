import express from 'express'; 
import { findCategories, findOneCategory, createCategory, updateCategory, deleteCategory } from './../services/category.service.js'

const router = express.Router();

router.get('/', findCategories);

router.get('/:id', findOneCategory);

router.post('/', createCategory);


router.patch('/:id', updateCategory);

router.delete('/:id', deleteCategory);

export { router as categoryRouter };
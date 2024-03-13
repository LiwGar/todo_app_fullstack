import express from 'express'; 
import { findUsers, findOneUser, createUser, updateUser, deleteUser } from './../services/user.service.js';

const router = express.Router();

router.get('/', findUsers);

router.get('/:id', findOneUser);

router.post('/', createUser);


router.patch('/:id', updateUser);

router.delete('/:id', deleteUser);

export { router as userRouter };
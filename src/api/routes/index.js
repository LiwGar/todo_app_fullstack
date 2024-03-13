import express from 'express';
import { taskRouter } from './tasks.router.js';
import { userRouter } from './users.router.js';
import { categoryRouter } from './categories.router.js';


function routerApi(app) {
    const router = express.Router();
    app.use('/api/v1', router);
    router.use('/tasks', taskRouter);
    router.use('/users', userRouter);
    router.use('/categories', categoryRouter);
}

export { routerApi }; 
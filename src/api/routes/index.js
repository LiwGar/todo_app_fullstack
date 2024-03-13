import express from 'express';
import { taskRouter } from './tasks.router.js';


function routerApi(app) {
    const router = express.Router();
    app.use('/api/v1', router);
    router.use('/tasks', taskRouter);
}

export { routerApi }; 
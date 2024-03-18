const express = require('express');
const taskRouter = require('./tasks.router.js');
const userRouter = require('./users.router.js');
const categoryRouter = require('./categories.router.js');


function routerApi(app) {
    const router = express.Router();
    app.use('/api/v1', router);
    router.use('/tasks', taskRouter);
    router.use('/users', userRouter);
    router.use('/categories', categoryRouter);
}

module.exports = routerApi;
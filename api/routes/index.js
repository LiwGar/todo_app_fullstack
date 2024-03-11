import express from 'express';

function routerApi(app) {
    const router = express.Router();
    app.use('/api/v1', router);
}

export default routerApi; 
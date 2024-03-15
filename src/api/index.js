import express from 'express';
import { routerApi } from './routes/index.js';
import  { logErrors, errorHandler, boomErrorHandler } from './middlewares/error.handler.js';

const app = express();

const port = process.env.PORT || 4000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello, my server in express');
});

app.get('/new_route', (req, res) => {
    res.send('This is a new route');
});

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);



app.listen(port, () => {
    console.log(`The API is listening on the port ${port}`);
});
import express from 'express';
import { routerApi } from './routes/index.js';

const app = express();

const port = process.env.PORT || 4000;

app.use(express.json());

app.get('/new_route', (req, res) => {
    res.send('This is a new route');
});

routerApi(app);

app.listen(port, () => {
    console.log(`The API is listening on the port ${port}`);
});
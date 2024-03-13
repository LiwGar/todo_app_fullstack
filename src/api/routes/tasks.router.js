import express from 'express'; 

const router = express.Router();

router.get('/', (req, res) => {
    res.send('all tasks');
});

router.get('/:id', (req, res) => {
    res.send('one tasks');
});

router.post('/', (req, res) => {
    res.send('task created');
});


router.patch('/:id', (req, res) => {
    res.send('task created');
});

router.delete('/:id', (req, res) => {
    res.send('task created');
});


export { router as taskRouter };
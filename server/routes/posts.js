import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    console.log('Visited home page');
    res.send('Home page works');
});

export default router;
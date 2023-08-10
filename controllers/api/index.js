const router = require('express').Router();

//const userRoutes = require('./');

//router.use('/users', userRoutes);
router.get('/', async (req, res) => {
    res.send('Hello World')
})

module.exports = router;

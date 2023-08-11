const router = require('express').Router();

const userRoutes = require('./users');
const recipeRoutes = require('./recipe');
const ingredientRoutes = require('./ingredients');
const stepRoutes = require('./steps');

router.use('/users', userRoutes);

router.use('/recipe', recipeRoutes);

router.use('/ingredients', ingredientRoutes);

router.use('/steps', stepRoutes);

module.exports = router;

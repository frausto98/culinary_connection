const router = require('express').Router();
const { Recipe, User } = require('../models');
// add auth middleware
const withAuth = require('../utils/auth');

// get all recipes for homepage
router.get('/', async (req, res) => {
    try {
        const recipeData = await Recipe.findAll({
            include: [
                {
                    model: Steps, 
                    attributes: ['id', 'step_number', 'step_text', 'recipe_id',]
                },
                {
                    model: Ingredients,
                    attributes: ['id', 'ingredient_name', 'indgredient_quantity', 'ingredient_measurment', 'recipe_id']
                },
                {
                    model: User,
                    attributes: ['id', 'username']
                }
            ],
        });

        const recipes = recipeData.map((recipe) =>
            recipe.get({ plain: true })
        );

        res.render('homepage', {
            recipes,
            loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
});

// get one recipe
router.get('/recipe/:id', async (req, res) => {
    try {
        const recipeData = await Recipe.findByPk(req.params.id, {
            include: [
                {
                    model: Steps,
                    attributes: ['id', 'step_number', 'step_text', 'recipe_id',]
                },
                {
                    model: Ingredients,
                    attributes: ['id', 'ingredient_name', 'indgredient_quantity', 'ingredient_measurment', 'recipe_id']
                },
                {
                    model: User,
                    attributes: ['id', 'username']
                }
            ],
        });

        const recipe = recipeData.get({ plain: true });
        res.render('recipe', { recipe, loggedIn: req.session.loggedIn });
    } catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
});

module.exports = router;

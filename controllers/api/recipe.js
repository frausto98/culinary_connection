// post,  put, delete routes for recipes

const router = require('express').Router();
const Recipe = require('../../models/Recipe');

// create new recipe
router.post('/', async (req, res) => {
    try {
        const recipe = await Recipe.create({
            recipe_name: req.body.recipe_name,
            recipe_description: req.body.recipe_description,
            recipe_instructions: req.body.recipe_instructions,
            difficulty_level: req.body.difficulty_level,
        });

        res.status(200).json(recipe);
    } catch (err) {
        res.status(400).json(err);
    }
})

module.exports = router;
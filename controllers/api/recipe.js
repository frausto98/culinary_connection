// post,  put, delete routes for recipes

const router = require('express').Router();
const Recipe = require('../../models/Recipe');

// create new recipe
router.post('/', async (req, res) => {
    console.log(req.body);
    try {
        const recipe = await Recipe.create({
            difficulty_level: req.body.difficultyLevel,
            recipe_name: req.body.recipeName,
            recipe_description: req.body.recipeDescription,
            user_id: req.session.user_id
        });
        req.session.save(() => {
            // req.session.loggedIn = true;
            req.session.recipe_id = recipe.id;
            res.status(200).json(recipe);
        });

    } catch (err) {
        res.status(400).json(err);
    }
}),

router.put('/:id', async (req, res) => {
    try  {
        const recipe = await Recipe.update({
            recipe_name: req.body.recipe_name,
            recipe_description: req.body.recipe_description,
            difficulty_level: req.body.difficultyLevel,
        },
            {
                where: {
                    id: req.params.id,
                },
            });
            
        }
    catch (err) {
        res.status(400).json(err);
    }
})

router.delete('/:id', async (req, res) => {
    try  {
        const recipe = await Recipe.destroy({
            where: {
                id: req.params.id,
            },
        });
        }
    catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;
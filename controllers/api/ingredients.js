// post, put and delete routes for ingredients

const router = require('express').Router();
const Ingredient = require('../../models/Ingredient');

// create new ingredient
router.post('/', async (req, res) => {
    try {
        const ingredient = await Ingredient.create({
            ingredient_name: req.body.ingredient_name,
            measurement: req.body.measurement,
        });

        res.status(200).json(ingredient);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.put('/:id', async (req, res) => {
    try  {
        const ingredient = await Ingredient.update({
            ingredient_name: req.body.ingredient_name,
            measurement: req.body.measurement,
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
        const ingredient = await Ingredient.destroy({
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
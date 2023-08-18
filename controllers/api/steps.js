// post, put, and delete routes for steps

const router = require('express').Router();
const Steps = require('../../models/Step');

// create new step
router.post('/', async (req, res) => {
    // try {
        console.log(req.body);
        const step = await Steps.create({
            step_number: req.body.stepNum,
            step_description: req.body.stepDescription,
            recipe_id: req.session.recipe_id,
        });

        res.status(200).json(step);
    // } catch (err) {
    //     res.status(400).json(err);
    // }
});

router.put('/:id', async (req, res) => {
    try {
        const step = await Steps.update({
            step_number: req.body.stepNum,
            step_description: req.body.stepDescription,
        },
            {
                where: {
                    id: req.params.id,
                },
            });
        }
        catch (err){
            res.status(400).json(err);
        }
    }),

router.delete('/:id', async (req, res) => {
    try  {
        const step = await Steps.destroy({
            where: {
                id: req.params.id,
            },
        });
        }
    catch (err) {
        res.status(400).json(err);
    }
})

module.exports = router;
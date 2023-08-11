// post, put, and delete routes for steps

const router = require('express').Router();
const Steps = require('../../models/Steps');

// create new step
router.post('/', async (req, res) => {
    try {
        const step = await Steps.create({
            step_number: req.body.step_number,
            step_description: req.body.step_description,
        });

        res.status(200).json(step);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.put('/:id', async (req, res) => {
    try {
        const step = await Steps.update({
            step_number: req.body.step_number,
            step_description: req.body.step_description,
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
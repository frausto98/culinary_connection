const router = require('express').Router();
const { Recipe, User, Steps, Ingredient } = require('../models');
// add auth middleware
const withAuth = require('../utils/auth');

// get route for welcome page(BEFORE LOGIN)
router.get('/', async (req, res) => {
    try {
        res.render('welcome');
    } catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
});


// get all recipes for homepage
router.get('/home', withAuth, async (req, res) => {
    try {
        const recipeData = await Recipe.findAll({
            include: [
                {
                    model: Steps, 
                    attributes: ['id', 'step_number', 'step_description', 'recipe_id',]
                },
                {
                    model: Ingredient,
                    attributes: ['id', 'ingredient_name', 'measurement', 'recipe_id']
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
                    attributes: ['id', 'step_number', 'step_description', 'recipe_id',]
                },
                {
                    model: Ingredient,
                    attributes: ['id', 'ingredient_name', 'measurement', 'recipe_id']
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

// //moved ratings filter to resulttss page
// router.get('/ratings/:rating', async (req, res) => {
//     try {
//         const ratingsData = await Ratings.findAll({
//             where: {
//                 rating: req.params.rating,
//             }
//         });
//         const ratings = ratingsData.map((rating) => rating.get({ plain: true }));
       
//         res.render('results', {
//             ratings,
//             loggedIn: req.session.loggedIn,
//         });
//     } catch (err) {
//         res.status(500).json(err);
//         console.log(err);
//     }
// });


// router.get('/login', (req, res) => {
//     if (req.session.loggedIn) {
//         res.redirect('/');
//         return;
//     }
//     res.render('login');

// });
module.exports = router;

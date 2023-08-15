const router = require('express').Router();
const { Recipe, User, Steps, Ingredient } = require('../models');
const SavedRecipe = require('../models/SavedRecipe');
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

//  if you need to run the homepage, remove the withAuth middleware
// get all recipes for homepage
router.get('/home', withAuth, async (req, res) => {
    try {
        const recipeData = await Recipe.findAll({
            include: [
                {
                    model: Steps,
                    attributes: ['step_number', 'step_description', 'recipe_id',]
                },
                {
                    model: Ingredient,
                    attributes: ['ingredient_name', 'measurement', 'recipe_id']
                },
                {
                    model: User,
                    attributes: ['username']
                }
            ],
        });

        const recipes = recipeData.map((recipe) =>
            recipe.get({ plain: true })
        );
        res.json(recipes);
        res.render('homepage', { recipes, loggedIn: req.session.loggedIn });
    } catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
});

// route to your dashboard
router.get('/you', async (req, res) => {
    try {
        // const userData = await User.findByPk(req.session.user_id, {
        //     attributes: { exclude: ['password', 'id'] },
        //     include: [{ model: Recipe}, 
        //         {model: SavedRecipe}],
        // });
        // const  user = userData.get({ plain: true });

        res.render('dashboard', { loggedIn: req.session.loggedIn });
    } catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
});

// router for creating recipes
router.get('/create', async (req, res) => {
    try {
        res.render('create', { loggedIn: req.session.loggedIn });
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
// need get route for filtering recipes by rating difficulty
router.get('/filter/:difficulty', async (req, res) => {
    try {
        const recipeData = await Recipe.findAll({
            where: {
                difficulty_level: req.params.difficulty
            },
            include: [
                {
                    model: Steps,
                    attributes: ['id', 'step_number', 'step_description', 'recipe_id']
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

        const recipes = recipeData.map(recipeInstance => recipeInstance.get({ plain: true }));
        
        // Render the homepage view with the filtered recipes
        res.render('homepage', { recipes, loggedIn: req.session.loggedIn });
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


router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/home');
        return;
    }
    res.render('login');

});

router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/home');
        return;
    }
    res.render('signup');

});
module.exports = router;

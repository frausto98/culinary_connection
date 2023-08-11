const router = require('express').Router();
const { Recipe, Ratings } = require('../../models');

// filter recipes by rating difficulty level 1=Easy 2=Medium 3=Hard

router.get('ratings', async (req, res) => {
    try {
        const ratingsDataEasy = await Ratings.findAll({
            where: {rating: 1}
        });
        const ratingsDataMedium = await Ratings.finaAll({
            where: {rating: 2}
        });
        const ratingsDataHard = await Ratings.findAll({
            where: {rating:3}
        });
        res.render('homepage', {
            ratingsDataEasy, ratingsDataMedium, ratingsDataHard,
            loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
});


module.exports = router;

// update a rating by rating id
// fetch to the back end for rating requests based on easy, intermediate, expert.
// 
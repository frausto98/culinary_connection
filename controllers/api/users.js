const router = require('express').Router();
const User = require('../../models/User');

// create new user
router.post('/', async (req, res) => {
    try {
        const user = await User.create(req.body);

        req.session.save(() => {
            req.session.loggedIn = true;
        res.status(200).json(user);
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

// login
router.post('/login', async (req, res) => {
    try {
        const dbUserData = await User.findOne({
            where: {
                email: req.body.email,
            },
        });

        if (!dbUserData) {
            res.status(400).json({ message: 'Incorrect email or password. Please try again!' });
            return;
        }

        const validPassword = await dbUserData.checkPassword(req.body.password);

        if (!validPassword) {
            res.status(400).json({ message: 'Incorrect email or password. Please try again!' });
            return;
        }

        req.session.save(() => {
            req.session.loggedIn = true;
            req.session.user_id = dbUserData.id;

            res.json({ user: dbUserData, message: 'You are now logged in!' });
        });

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// logout

router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(400).end();
    }
});

module.exports = router;

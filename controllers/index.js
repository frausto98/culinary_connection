const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes.js');
// const dashboardRoutes = require('./dashboard.js');

router.use('/', homeRoutes);
// router.use('/you', dashboardRoutes);
router.use('/api', apiRoutes);

module.exports = router;
const router = require('express').Router();
const apiRoutes = require('./api');
const home = require('./home');
const post = require('./post');
const user = require('./user');

router.use('/', home);
router.use('/post', post);
router.use('/user', user);
router.use('/api', apiRoutes);

module.exports = router;
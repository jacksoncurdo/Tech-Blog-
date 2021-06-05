const router = require('express').Router();
const apiRoutes = require('./api');
const home = require('./home.js');
const post = require('./post.js');
const user = require('./user.js');

router.use('/', home);
router.use('/post', post);
router.use('/user', user);
router.use('/api', apiRoutes);

module.exports = router;
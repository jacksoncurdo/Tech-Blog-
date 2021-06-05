  
const router = require('express').Router();
const commentRoute = require('./commentRoute.js');
const postRoute = require('./postRoute.js');
const accessRoute = require('./accessRoute.js');

router.use('/users', accessRoute);
router.use('/posts', postRoute);
router.use('/comment', commentRoute);

module.exports = router;
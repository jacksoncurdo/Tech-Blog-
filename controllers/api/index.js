  
const router = require('express').Router();
const commentRoute = require('./commentRoute');
const postRoute = require('./postRoute');
const accessRoute = require('./accessRoute');

router.use('/users', accessRoute);
router.use('/posts', postRoute);
router.use('/comment', commentRoute);

module.exports = router;
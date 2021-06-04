const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// Post request to add a comment to a post 
router.post('/post/:id', withAuth, async (req, res) => {
  try {
    const postData = await Comment.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
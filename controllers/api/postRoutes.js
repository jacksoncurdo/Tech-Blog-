const router = require('express').Router();
const { Post, User } = require('../models');
const withAuth = require('../utils/auth');

// Get request for a users id
router.get('/:id', async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Post }],
    });

    const user = userData.get({ plain: true });

    res.render('dashboard', {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get request for creating a post page
router.get('/post/create', async (req, res) => {
    try {
      res.render('create-Post', {
        include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
        logged_in: req.session.logged_in
    });
  } catch (err) {
      res.status(500).json(err);
  }
});

// Get request for the id of a post 
router.get('/post/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
        },
      ],
    });

    const posts = postData.get({ plain: true });

    res.render('edit-Post', {
      ...posts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
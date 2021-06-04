const router = require('express').Router();

// Getslogin page 
router.get('/login', (req, res) => {

  res.render('login');
});

// Gets signup page 
router.get('/signup', (req, res) => {

  res.render('sign-Up');
});

module.exports = router;
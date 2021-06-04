const router = require('express').Router();

// Getting login page with a get request through the login route
router.get('/login', (req, res) => {
// Showing login page to user 
  res.render('login');
});

// Getting signup page with a get request through the signup route
router.get('/signup', (req, res) => {
// Showing signup page to the user 
  res.render('sign-Up');
});

module.exports = router;
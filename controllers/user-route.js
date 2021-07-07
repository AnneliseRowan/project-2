const router = require('express').Router();

const users = [
  {
    firstName: 'Alexis',
    fave_book: 'Norwegian Wood'
  },
  {
    firstName: 'Naomi',
    fave_book: 'Where The Red Fern Grows'
  }
];
// get all users
router.get('/', async (req, res) => {
  return res.render('all', { users });
});

// get one user
router.get('/user/:num', async (req, res) => {
  return res.render('profile', users[req.params.num - 1]);
});

module.exports = router;

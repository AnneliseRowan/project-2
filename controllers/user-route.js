// eslint-disable-next-line no-unused-vars
const user = require('../models/user');

const router = require('express').Router();

// get all users
router.get('/', async (req, res) => {
  // User is User model
  // eslint-disable-next-line no-undef
  const userData = await User.findAll().catch((err) => {
    res.json(err);
  });

  const users = userData.map((user) => user.get({ plain: true }));
  return res.render('all', { users });
});

// get one user
router.get('/user/:num', async (req, res) => {
  try {
    // eslint-disable-next-line no-undef
    const userData = await User.findbyPk(req.params.id);
    if (!userData) {
      res.status(404).json({ message: 'No user with this id!' });
      return;
    }
    const user = userData.get({ plain: true });
    res.render('profile', user[req.params.num - 1]);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

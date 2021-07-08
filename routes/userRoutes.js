// eslint-disable-next-line no-unused-vars
const { user } = require('../models');
// eslint-disable-next-line no-unused-vars
const router = require('express').Router();

// get all users
router.get('/', async (req, res) => {
  // User is User model
  // eslint-disable-next-line no-undef
  const userData = await User.findAll().catch((err) => {
    res.json(err);
    // include other models????
    // such as userLibrary
  });

  const users = userData.map((user) => user.get({ plain: true }));
  return res.render('all', { users });
});

// get one user
router.get('/user/:id', async (req, res) => {
  try {
    // eslint-disable-next-line no-use-before-define
    const userData = await user.findbyPk(req.params.id);
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

// create a user using async/await
router.post('/', async (req, res) => {
  try {
    const userData = await user.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      username: req.body.username,
      password: req.body.password,
      contact: req.body.contact,
      isAdmin: req.body.isAdmin
    });
    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// add put for update
// what would we update????
// update username, name, email, or password???

// delete a user by id
router.delete('/user/:id', async (req, res) => {
  try {
    const userData = await user.destroy({
      where: {
        id: req.params.id
      }
    });
    if (!userData) {
    // instead of json message, possibly render page or modal popup with delete notification?
      res.status(404).json({ message: 'No user found with this id' });
      return;
    }
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  };
});

// router.delete('/:id', async (req, res) => {
//     // delete a category by its `id` value
//     try {
//       const categoryData = await Category.destroy({
//         where: {
//           id: req.params.id
//         }
//       });
//       if (!categoryData) {
//         res.status(404).json({ message: 'No category found with this id!' });
//         return;
//       }
//       res.status(200).json(categoryData);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });
module.exports = router;

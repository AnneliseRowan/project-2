// FUNCTIONS FOR RENDERING JSON USERS;

module.exports = function (db) {
  return {
    // list all users with json
    getAllUsers: async (req, res) => {
      try {
        const userData = await db.User.findAll();
        res.status(200).json(userData);
      } catch (err) {
        res.status(500).json(err);
      }
    },

    // list one user by id with json
    getOneUser: async (req, res) => {
      try {
        const userData = await db.User.findByPk(req.params.id);
        if (!userData) {
          res.status(404).json({ message: 'No user found with this id!!!!' });
        } res.status(200).json(userData);
      } catch (err) {
        res.status(500).json(err);
      }
    },

    // post a new user
    createUser: async (req, res) => {
      try {
        const newUserData = await db.User.create({
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email,
          username: req.body.username,
          password: req.body.password,
          contact: req.body.contact,
          isAdmin: req.body.isAdmin
        });
        res.status(200).json(newUserData);
      } catch (err) {
        res.status(400).json(err);
      }
    },

    // update an existing user
    updateUser: async (req, res) => {
      try {
        const updatedUserData = await db.User.update(
          { username: req.body.username,
            password: req.body.password },
          { where: {
            id: req.params.id
          }
          });
          // add some kind of alert to notify the update has been made??
        res.status(200).json(updatedUserData);
      } catch (err) {
        res.status(400).json(err);
      }
    },

    // delete a user
    deleteUser: async (req, res) => {
      try {
        const userData = await db.User.destroy({
          where: {
            id: req.params.id
          }
        });
        if (!userData) {
          res.status(404).json({ message: 'No user found with this id!' });
          return;
        }
        res.status(200).json(userData);
      } catch (err) {
        res.status(400).json(err);
      }
    }

  };
};

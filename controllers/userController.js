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
    }
  };
};

// FUNCTIONS FOR RENDERING JSON USERS;

module.exports = function (db) {
  return {
    getAllUsers: async (req, res) => {
      try {
        const userData = await db.User.findAll();
        res.status(200).json(userData);
      } catch (err) {
        res.status(500).json(err);
      }
    }
  };
};

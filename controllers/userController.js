// FUNCTIONS FOR RENDERING JSON USERS;

module.exports = function () {
  return {
    getAllUsers: function (req, res) {
      res.status(200).json({ message: 'THIS IS WORKING!!!!!' });
    }
  };
};

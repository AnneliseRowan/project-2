module.exports = function (db) {
  return {
    // Get all examples
    getExample: function (req, res) {
      db.Examples.findAll({ where: { UserId: req.session.passport.user.id } }).then(function (dbExamples) {
        res.json(dbExamples);
      });
    },
    // Create a new example
    createExamples: function (req, res) {
      db.Examples.create(req.body).then(function (dbExamples) {
        res.json(dbExamples);
      });
    },
    // Delete an example by id
    deleteExamples: function (req, res) {
      db.Examples.destroy({ where: { id: req.params.id } }).then(function (dbExamples) {
        res.json(dbExamples);
      });
    }
  };
};

module.exports = function (db) {
  return {
    // get all books
    getAllUserLibrary: async (req, res) => {
      try {
        const userLibraryData = await db.UserLibrary.findAll({
          include: [
            {
              model: db.User
            },
            {
              model: db.Book
            }
          ]
        });
        res.status(200).json(userLibraryData);
      } catch (err) {
        res.status(500).json(err);
        console.log(`errr!!`, err);
      }
    },

    // get one book
    getOneUserLibrary: async (req, res) => {
      try {
        const userLibraryData = await db.UserLibrary.findByPk(req.params.id, {
          include: [
            {
              model: db.User
            },
            {
              model: db.Book
            }
          ]
        });
        if (!userLibraryData) {
          res.status(404).json({ message: 'No book found with this id!!!' });
        }
        res.status(200).json(userLibraryData);
      } catch (err) {
        res.status(500).json(err);
      }
    },

    // get all books
    getAllOwnedBy: async (req, res) => {
      const user = req.params.id;
      try {
        const userLibraryData = await db.UserLibrary.findAll({ where: { UserId: user },
          include: [
            {
              model: db.User
            },
            {
              model: db.Book
            }
          ] });
        res.status(200).json(userLibraryData);
      } catch (err) {
        res.status(500).json(err);
      }
    },

    // get all  hard cover books books
    getAllHard: async (req, res) => {
      try {
        const userLibraryData = await db.UserLibrary.findAll({ where: { hardcopy: true },
          include: [
            {
              model: db.User
            },
            {
              model: db.Book
            }
          ] });
        res.status(200).json(userLibraryData);
      } catch (err) {
        res.status(500).json(err);
      }
    },

    // get all  soft cover books books
    getAllSoft: async (req, res) => {
      try {
        const userLibraryData = await db.UserLibrary.findAll({ where: { hardcopy: false },
          include: [
            {
              model: db.User
            },
            {
              model: db.Book
            }
          ] });
        res.status(200).json(userLibraryData);
      } catch (err) {
        res.status(500).json(err);
      }
    },

    // Get all softcover for one user
    getOneSoft: async (req, res) => {
      const user = req.params.id;
      try {
        const userLibraryData = await db.UserLibrary.findAll({
          where: {
            hardcopy: false,
            userID: user
          },
          include: [
            {
              model: db.User
            },
            {
              model: db.Book
            }
          ] });
        res.status(200).json(userLibraryData);
      } catch (err) {
        res.status(500).json(err);
      }
    },

    // get all hardcover for one user
    getOneHard: async (req, res) => {
      const user = req.params.id;
      try {
        const userLibraryData = await db.UserLibrary.findAll({
          where: {
            hardcopy: true,
            userID: user
          },
          include: [
            {
              model: db.User
            },
            {
              model: db.Book
            }
          ] });
        res.status(200).json(userLibraryData);
      } catch (err) {
        res.status(500).json(err);
      }
    },

    // get all books being currently read by one person
    getOneRead: async (req, res) => {
      const user = req.params.id;
      try {
        const userLibraryData = await db.UserLibrary.findAll({
          where: {
            current_reading: true,
            userID: user
          },
          include: [
            {
              model: db.User
            },
            {
              model: db.Book
            }
          ] });
        res.status(200).json(userLibraryData);
      } catch (err) {
        res.status(500).json(err);
      }
    },

    // get all books being currently read by everyone
    getAllRead: async (req, res) => {
      try {
        const userLibraryData = await db.UserLibrary.findAll({
          where: {
            current_reading: true
          },
          include: [
            {
              model: db.User
            },
            {
              model: db.Book
            }
          ] });
        res.status(200).json(userLibraryData);
      } catch (err) {
        res.status(500).json(err);
      }
    },

    // post a new book
    createEntry: async (req, res) => {
      try {
        const newUserLibraryData = await db.UserLibrary.create({
          title: req.body.title,
          author: req.body.author
        });
        res.status(200).json(newUserLibraryData);
      } catch (err) {
        res.status(400).json(err);
      }
      // add a check for multiple book titles
      // does not start at next number, starts at number after deleted book
    }
    // update a book ???
    // delete a book ???
  };
};

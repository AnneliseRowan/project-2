// FUNCTIONS FOR RENDERING JSON BOOKS FROM DATABASE;

module.exports = function (db) {
  return {
    // get all books
    getAllBooks: async (req, res) => {
      try {
        const bookData = await db.Book.findAll();
        res.status(200).json(bookData);
      } catch (err) {
        res.status(500).json(err);
      }
    },

    // get one book
    getOneBook: async (req, res) => {
      try {
        const bookData = await db.Book.findByPk(req.params.id);
        if (!bookData) {
          res.status(404).json({ message: 'No book found with this id!!!' });
        } res.status(200).json(bookData);
      } catch (err) {
        res.status(500).json(err);
      }
    },

    // post a new book
    createBook: async (req, res) => {
      try {
        const newBookData = await db.Book.create({
          title: req.body.title,
          author: req.body.author
        });
        res.status(200).json(newBookData);
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

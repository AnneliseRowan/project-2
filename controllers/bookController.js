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
    }
    // get one book
    // post a new book
    // update a book ???
    // delete a book
  };
};

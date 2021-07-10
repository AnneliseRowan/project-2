const { UserLibrary } = require('../models');

const UserDataLibrary = [
  {
    book_id: Math.floor(Math.random() * 8 + 1),
    user_id: Math.floor(Math.random() * 5 + 1),
    book_read: Math.floor(Math.random() * 1 + 0),
    hardcopy: Math.floor(Math.random() * 1 + 0),
    current_reading: Math.floor(Math.random() * 1 + 0)
  },
  {
    book_id: Math.floor(Math.random() * 8 + 1),
    user_id: Math.floor(Math.random() * 5 + 1),
    book_read: Math.floor(Math.random() * 1 + 0),
    hardcopy: Math.floor(Math.random() * 1 + 0),
    current_reading: Math.floor(Math.random() * 1 + 0)
  },
  {
    book_id: Math.floor(Math.random() * 8 + 1),
    user_id: Math.floor(Math.random() * 5 + 1),
    book_read: Math.floor(Math.random() * 1 + 0),
    hardcopy: Math.floor(Math.random() * 1 + 0),
    current_reading: Math.floor(Math.random() * 1 + 0)
  },
  {
    book_id: Math.floor(Math.random() * 8 + 1),
    user_id: Math.floor(Math.random() * 5 + 1),
    book_read: Math.floor(Math.random() * 1 + 0),
    hardcopy: Math.floor(Math.random() * 1 + 0),
    current_reading: Math.floor(Math.random() * 1 + 0)
  },
  {
    book_id: Math.floor(Math.random() * 8 + 1),
    user_id: Math.floor(Math.random() * 5 + 1),
    book_read: Math.floor(Math.random() * 1 + 0),
    hardcopy: Math.floor(Math.random() * 1 + 0),
    current_reading: Math.floor(Math.random() * 1 + 0)
  },
  {
    book_id: Math.floor(Math.random() * 8 + 1),
    user_id: Math.floor(Math.random() * 5 + 1),
    book_read: Math.floor(Math.random() * 1 + 0),
    hardcopy: Math.floor(Math.random() * 1 + 0),
    current_reading: Math.floor(Math.random() * 1 + 0)
  },
  {
    book_id: Math.floor(Math.random() * 8 + 1),
    user_id: Math.floor(Math.random() * 5 + 1),
    book_read: Math.floor(Math.random() * 1 + 0),
    hardcopy: Math.floor(Math.random() * 1 + 0),
    current_reading: Math.floor(Math.random() * 1 + 0)
  },
  {
    book_id: Math.floor(Math.random() * 8 + 1),
    user_id: Math.floor(Math.random() * 5 + 1),
    book_read: Math.floor(Math.random() * 1 + 0),
    hardcopy: Math.floor(Math.random() * 1 + 0),
    current_reading: Math.floor(Math.random() * 1 + 0)
  },
  {
    book_id: Math.floor(Math.random() * 8 + 1),
    user_id: Math.floor(Math.random() * 5 + 1),
    book_read: Math.floor(Math.random() * 1 + 0),
    hardcopy: Math.floor(Math.random() * 1 + 0),
    current_reading: Math.floor(Math.random() * 1 + 0)
  },
  {
    book_id: Math.floor(Math.random() * 8 + 1),
    user_id: Math.floor(Math.random() * 5 + 1),
    book_read: Math.floor(Math.random() * 1 + 0),
    hardcopy: Math.floor(Math.random() * 1 + 0),
    current_reading: Math.floor(Math.random() * 1 + 0)
  }
];

const seedUserLibrary = () => UserLibrary.bulkCreate(UserDataLibrary);
module.exports = seedUserLibrary;

const { UserLibrary } = require('../models');

const UserDataLibrary = [
  {
    book_id: Math.floor(Math.random() * 8 + 1),
    user_id: Math.floor(Math.random() * 5 + 1),
    book_read: Math.floor(Math.random() * 2),
    hardcopy: Math.floor(Math.random() * 2),
    current_reading: Math.floor(Math.random() * 2)
  },
  {
    book_id: Math.floor(Math.random() * 8 + 1),
    user_id: Math.floor(Math.random() * 5 + 1),
    book_read: Math.floor(Math.random() * 2),
    hardcopy: Math.floor(Math.random() * 2),
    current_reading: Math.floor(Math.random() * 2)
  },
  {
    book_id: Math.floor(Math.random() * 8 + 1),
    user_id: Math.floor(Math.random() * 5 + 1),
    book_read: Math.floor(Math.random() * 2),
    hardcopy: Math.floor(Math.random() * 2),
    current_reading: Math.floor(Math.random() * 2)
  },
  {
    book_id: Math.floor(Math.random() * 8 + 1),
    user_id: Math.floor(Math.random() * 5 + 1),
    book_read: Math.floor(Math.random() * 2),
    hardcopy: Math.floor(Math.random() * 2),
    current_reading: Math.floor(Math.random() * 2)
  },
  {
    book_id: Math.floor(Math.random() * 8 + 1),
    user_id: Math.floor(Math.random() * 5 + 1),
    book_read: Math.floor(Math.random() * 2),
    hardcopy: Math.floor(Math.random() * 2),
    current_reading: Math.floor(Math.random() * 2)
  },
  {
    book_id: Math.floor(Math.random() * 8 + 1),
    user_id: Math.floor(Math.random() * 5 + 1),
    book_read: Math.floor(Math.random() * 2),
    hardcopy: Math.floor(Math.random() * 2),
    current_reading: Math.floor(Math.random() * 2)
  },
  {
    book_id: Math.floor(Math.random() * 8 + 1),
    user_id: Math.floor(Math.random() * 5 + 1),
    book_read: Math.floor(Math.random() * 2),
    hardcopy: Math.floor(Math.random() * 2),
    current_reading: Math.floor(Math.random() * 2)
  },
  {
    book_id: Math.floor(Math.random() * 8 + 1),
    user_id: Math.floor(Math.random() * 5 + 1),
    book_read: Math.floor(Math.random() * 2),
    hardcopy: Math.floor(Math.random() * 2),
    current_reading: Math.floor(Math.random() * 2)
  },
  {
    book_id: Math.floor(Math.random() * 8 + 1),
    user_id: Math.floor(Math.random() * 5 + 1),
    book_read: Math.floor(Math.random() * 2),
    hardcopy: Math.floor(Math.random() * 2),
    current_reading: Math.floor(Math.random() * 2)
  },
  {
    book_id: Math.floor(Math.random() * 8 + 1),
    user_id: Math.floor(Math.random() * 5 + 1),
    book_read: Math.floor(Math.random() * 2),
    hardcopy: Math.floor(Math.random() * 2),
    current_reading: Math.floor(Math.random() * 2)
  }
];

const seedUserLibrary = () => UserLibrary.bulkCreate(UserDataLibrary);
module.exports = seedUserLibrary;

const sequelize = require('../config/connection');
// const { User, Book } = require('../models');

// const userData = require('./userData');
// const bookData = require('./bookData');
const SeedBook = require('./bookData');
const seedUser = require('./userData');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  // const users = await User.bulkCreate(userData, {
  //   individualHooks: true,
  //   returning: true
  // });

  // for (let books of bookData) {
  //   await Book.bulkCreate(bookData, {
  //     individualHooks: true,
  //     returning: true
  //     // ...books,
  //     // user_id: users[Math.floor(Math.random() * users.length)].id
  //   });
  // }
  await SeedBook();
  await seedUser();
  process.exit(0);
};

seedDatabase();

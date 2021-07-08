const db = require('../models');
const { User, Book } = require('../models');

const userData = require('./userData');
const bookData = require('./bookData');

const seedDatabase = async () => {
  await db.sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true
  });

  for (const books of bookData) {
    await Book.create({
      ...books,
      user_id: users[Math.floor(Math.random() * users.length)].id
    });
  }

  process.exit(0);
};

seedDatabase();

const { User } = require('../models');

const UserData = [
  {
    firstName: 'Annelise',
    lastName: 'Rowan',
    email: 'Annelise@Rowan.com',
    username: 'GoingRowan',
    password: 'password1'
  },
  {
    firstName: 'Jonathan',
    lastName: 'Nance',
    email: 'Jonathan@Nance.com',
    username: 'JNance',
    password: 'password12'
  },
  {
    firstName: 'James',
    lastName: 'Antley',
    email: 'James@Antley.com',
    username: 'JAntley',
    password: 'password123'
  },
  {
    firstName: 'Alexis',
    lastName: 'Ligon',
    email: 'Alexis@Ligon.com',
    username: 'LexLigon',
    password: 'password1234'
  },
  {
    firstName: 'Naomi',
    lastName: 'Valdovinos',
    email: 'Naomi@Valdovinos.com',
    username: 'NaomiV',
    password: 'password12345'
  },
  {
    firstName: 'Rachel',
    lastName: 'Davis',
    email: 'Rachel@Davis.com',
    username: 'RachelDavis',
    password: 'password123456'
  }
];

const seedUser = () => User.bulkCreate(UserData);

module.exports = seedUser;

const { User } = require('../models');

const UserData = [
  {
    firstName: 'Annelise',
    lastName: 'Rowan',
    email: 'Annelise@Rowan.com',
    username: 'GoingRowan',
    password: '$2b$10$KdjMcjeSCxZKOkN7iumV/eUip35Gwd/ifmTZmDIj6rWPCLLlaByjG'
  },
  {
    firstName: 'Jonathan',
    lastName: 'Nance',
    email: 'Jonathan@Nance.com',
    username: 'JNance',
    password: '$2b$10$KdjMcjeSCxZKOkN7iumV/eUip35Gwd/ifmTZmDIj6rWPCLLlaByjG'
  },
  {
    firstName: 'James',
    lastName: 'Antley',
    email: 'James@Antley.com',
    username: 'JAntley',
    password: '$2b$10$KdjMcjeSCxZKOkN7iumV/eUip35Gwd/ifmTZmDIj6rWPCLLlaByjG'
  },
  {
    firstName: 'Alexis',
    lastName: 'Ligon',
    email: 'Alexis@Ligon.com',
    username: 'LexLigon',
    password: '$2b$10$KdjMcjeSCxZKOkN7iumV/eUip35Gwd/ifmTZmDIj6rWPCLLlaByjG'
  },
  {
    firstName: 'Naomi',
    lastName: 'Valdovinos',
    email: 'Naomi@Valdovinos.com',
    username: 'NaomiV',
    password: '$2b$10$KdjMcjeSCxZKOkN7iumV/eUip35Gwd/ifmTZmDIj6rWPCLLlaByjG'
  },
  {
    firstName: 'Rachael',
    lastName: 'Davis',
    email: 'Rachael@Davis.com',
    username: 'RachaelDavis',
    password: '$2b$10$KdjMcjeSCxZKOkN7iumV/eUip35Gwd/ifmTZmDIj6rWPCLLlaByjG'
  }
];

const seedUser = () => User.bulkCreate(UserData);

module.exports = seedUser;

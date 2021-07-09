const { Book } = require('../models');

const BookData = [
  {
    title: 'Lord of the Rings',
    author: 'JRR Tolkien'
  },
  {
    title: 'To Kill A Mockingbird',
    author: 'Harper Lee'
  },
  {
    title: 'The Diary of  a Young Girl',
    author: 'Anne Frank'
  },
  {
    title: 'Jane Eyre',
    author: 'Charlotte Bronte'
  },
  {
    title: 'The Chronicles of Narnia',
    author: 'CS Lewis'
  },
  {
    title: 'Alice in Wonderland',
    author: 'Lewis Carroll'
  },
  {
    title: 'Little Women',
    author: 'Louisa May Alcott'
  },
  {
    title: 'Wuthering Heights',
    author: 'Emile Bronte'
  },
  {
    title: 'Gone with the Wind',
    author: 'Margaret Mitchell'
  }
];

const SeedBook = () => Book.bulkCreate(BookData);
const consoleBook = () => console.log('Book:', Book);

module.exports = SeedBook;
module.exports = consoleBook;

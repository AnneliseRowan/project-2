const router = require('express').Router();
const ensureAuthenticated = require('../middlewares/ensureAuthenticated');

module.exports = (passport, db) => {
  const AuthController = require('../controllers/authController')(passport, db);
  const AppController = require('../controllers/appController')(db);
  const UserController = require('../controllers/userController')(db);
  const BookController = require('../controllers/bookController')(db);

  // Authentication
  router.post('/register', AuthController.register);
  router.post('/login', AuthController.login);
  router.get('/logout', AuthController.logout);
  router.put('/user/:id', ensureAuthenticated, AuthController.updateUser);
  router.delete('/user/:id', ensureAuthenticated, AuthController.deleteUser);
  router.post('/user/confirm', AuthController.confirmAuth);

  // App
  router.get('/examples', AppController.getExamples);
  router.post('/examples', AppController.createExample);
  router.delete('/examples/:id', AppController.deleteExample);
  // routes for books
  router.get('/books', BookController.getAllBooks);
  router.get('/books/:id', BookController.getOneBook);
  // routes for users
  router.get('/users', UserController.getAllUsers);
  router.get('/users/:id', UserController.getOneUser);
  router.post('/users', UserController.createUser);
  router.put('/users/:id', UserController.updateUser);
  router.delete('/users/:id', UserController.deleteUser);

  return router;
};

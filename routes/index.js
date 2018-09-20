const express = require('express');
const companyController = require('../controllers/companyController');
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');
const reviewController = require('../controllers/reviewController');

const newsController = require('../controllers/newsController');

const router = express.Router();

// Главная Страница - Все Компании
router.get('/', companyController.getCompanies);
router.get('/companies/page/:page', companyController.getCompanies);

// Зашли в Раздел Добавить Компанию
//router.get('/add', authController.isLoggedIn, companyController.addCompany);
router.get('/add', authController.isAdmin, companyController.addCompany);

// Заполнили данные в разделе ADD и добавили Компанию
router.post('/add',
          companyController.upload,
          companyController.resize,
          companyController.createCompany
          );

// Зашли в раздел Edit существующей компании
router.get('/companies/:id/edit', companyController.editCompany);

// Сделали Submit обновленных данных по Компании из раздела Edit
router.post('/add/:id',
          companyController.upload,
          companyController.resize,
          companyController.updateCompany
          );
 
// Страница Компании
//router.get('/companies/:slug', companyController.getCompanyBySlug);
router.get('/kovorking/:slug', companyController.getCompanyBySlug);

// OKRUG PAGE and Pagination
router.get('/okrug/:id', companyController.getCompaniesOkrug);
router.get('/okrug/:id/page/:page', companyController.getCompaniesOkrug);


// Страница Добавить: Submit a Company
router.get('/submit', companyController.submitForm);
router.post('/submit',
                companyController.upload,
                companyController.submitCompany);



// Login and Registration
router.get('/login', userController.loginForm);
router.post('/login', authController.login);
router.get('/register', userController.registerForm);

// 1 - Validate Registration Data
// 2 - Register the User - using .register method on User model - passportLocalMongoose plugin
// 3 - Log the User In! - using Paspport library
router.post('/register',
                userController.validateRegister,
                userController.register,
                authController.login
              );


router.get('/logout', authController.logout);

// Нажали на аватар после логина - личный кабинет
router.get('/account', authController.isLoggedIn, userController.account);
router.post('/account', userController.updateAccount);

//Нажали Восстановить пароль
router.post('/account/forgot', authController.forgot);
// Получили ссылку для восстановления
router.get('/account/reset/:token', authController.reset);
router.post('/account/reset/:token',
  authController.confirmedPasswords,
  authController.update
);

router.get('/map', companyController.mapPage);
router.get('/hearts', authController.isLoggedIn, companyController.getHearts);
router.post('/reviews/:id', authController.isLoggedIn, reviewController.addReview);
router.get('/top', companyController.getTopCompanies);

router.get('/about', companyController.about);
router.post('/receive', companyController.receive);


router.get('/chto-takoe-kovorking', companyController.whatiskovorking);
router.get('/contacts', companyController.contacts);

router.get('/metro/:id', companyController.searchMetro);
router.get('/metro/:id/page/:page', companyController.searchMetro);

//News
router.get('/addnews', authController.isAdmin, newsController.addNews);
router.post('/addnews', newsController.createNews);

// Зашли в раздел Edit существующей компании
router.get('/news/:id/edit', newsController.editNews);

router.post('/addnews/:id', newsController.updateNews);


// Страница: All News
router.get('/news', newsController.getNews);
router.get('/news/page/:page', newsController.getNews);
// Страница: Single News
router.get('/news/:slug', newsController.getNewsBySlug);



/*
  API
*/

//my test subway API
router.get('/api/search/subway', companyController.searchCompSubway);

router.get('/api/search', companyController.searchCompanies);
router.get('/api/companies/near', companyController.mapCompanies);


router.post('/api/companies/:id/heart', companyController.heartCompany);


module.exports = router;

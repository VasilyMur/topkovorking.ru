const mongoose = require('mongoose');
const Company = mongoose.model('Company');
const User = mongoose.model('User');
const News = mongoose.model('News');
const promisify = require('es6-promisify');
const nodemailer = require('nodemailer');
const slugify = require('slugify');




// upload photos package
const multer = require('multer');
// resize package
const Jimp = require('jimp');
// unique identifier package - prevent from same photo file names
const uuid = require('uuid');

const multerOptions = {
    storage: multer.memoryStorage(),
    fileFilter: function(req, file, next) {
        const isPhoto = file.mimetype.startsWith('image/');
        if (isPhoto) {
            next(null, true);
        } else {
            next({ message: 'Недопустимый формат' }, false);
        }
    }
};


// Главная Страница - Все Компании
exports.getCompanies = async (req, res) => {
  try {
    const page = req.params.page || 1;
    const limit = 15;
    const skip = (page * limit) - limit;

    // Query the DB for a list of all Companies
    const companiesPromise = Company
      .find()
      .skip(skip)
      .limit(limit)
      .sort({ created: 'desc' });

    // Promise returns number of companies in DB
    const countPromise = Company.count();

    // News Promise
    const newsPromise = News
      .find()
      .limit(2)
      .sort({ date: -1 });

    //Awit All Promises
    const [companies, count, news] = await Promise.all([companiesPromise, countPromise, newsPromise]);

    const pages = Math.ceil(count / limit);
    if (!companies.length && skip) {
      req.flash('info', `Вы запросили несуществующую страницу ${page}. Перенаправляем на страницу ${pages}.`);
      res.redirect(`/companies/page/${pages}`);
      return;
    }

    // New Part: Get TAGS
    const tags = await Company.getTagsList();
    const tagsEng = tags.map(tag => {
      return {
        _id: tag._id,
        count: tag.count,
        slg: slugify(tag._id).toLowerCase()
      }
    });

    res.render('companies', { companies, page, pages, count, tagsEng, news });
  } catch(e) {
    res.render('error', {message:'Something went wrong'});
  }
};


// Коворкинги по Округам
exports.getCompaniesOkrug = async (req, res) => {

  try {
    // PAGINATION
    const page = req.params.page || 1;
    const limit = 10;
    const skip = (page * limit) - limit;

    const tagOriginal = req.params.id;
    let tag;

    if (tagOriginal === 'centralnyj') {
      tag = 'Центральный';
    } else if (tagOriginal === 'zapadnyj') {
      tag = 'Западный';
    } else if (tagOriginal === 'yuzhnyj') {
      tag = 'Южный';
    } else if (tagOriginal === 'vostochnyj') {
      tag = 'Восточный';
    } else if (tagOriginal === 'severnyj') {
      tag = 'Северный';
    } else if (tagOriginal === 'zelenogradskij') {
      tag = 'Зеленоградский';
    } else if (tagOriginal === 'yugo-vostochnyj') {
      tag = 'Юго-Восточный';
    } else if (tagOriginal === 'yugo-zapadnyj') {
      tag = 'Юго-Западный';
    } else if (tagOriginal === 'severo-vostochnyj') {
      tag = 'Северо-Восточный';
    } else if (tagOriginal === 'severo-zapadnyj') {
      tag = 'Северо-Западный';
    } else if (tagOriginal === 'moskva-siti') {
      tag = 'Москва Сити';
    }


    // Companies Promise
    const companiesPromise = Company
              .find({ tags: tag })
              .skip(skip)
              .limit(limit)
              .sort({ created: 'desc' });


    // Promise returns number of companies in DB
    const countPromise = Company.getTagData(tag);

    //Awit All Promises
    const [companies, okrugCount] = await Promise.all([companiesPromise, countPromise]);
    const { count } = okrugCount[0];


    const pages = Math.ceil(count / limit);
    if (!companies.length && skip) {
      req.flash('info', `Страница ${page} не существует. Возвращаемся на страницу ${pages}`);
      res.redirect(`/tags/majning-otel/page/${pages}`);
      return;
    };

    // Tags Promise
    const tags = await Company.getTagsList();
    const tagsEng = tags.map(tag => {
      return {
        _id: tag._id,
        count: tag.count,
        slg: slugify(tag._id).toLowerCase()
      }
    });

 

    res.render('pageOkrug', { tag, companies, tags, page, pages, tagOriginal, tagsEng, count });

  } catch(e) {
    res.render('error', {message:'Something went wrong'});
  }
};

// Зашли в Раздел Добавить Компанию
exports.addCompany = (req, res) => {
  res.render('editCompany', { title: 'Админ Добавить Компанию' });
};

// stores image file into memory (doesn't save)
exports.upload = multer(multerOptions).single('photo');
// resize uploaded photos
exports.resize = async (req, res, next) => {
  try {
    // check if there is no new file to resize
    if( !req.file ) {
        next(); //skip to the next middleware
        return;
    };

    const extension = req.file.mimetype.split('/')[1];
    req.body.photo = `${uuid.v4()}.${extension}`;

    // now we resize
    const photo = await Jimp.read(req.file.buffer);
    await photo.resize(800, Jimp.AUTO);
    await photo.write(`./public/uploads/${req.body.photo}`); // save
    // once we have written the photo to our filesystem keep going!
    next();
  } catch(e) {
    res.render('error', {message:'Something went wrong'});
  };
};

 
 
// POST: Заполнили данные в разделе ADD и Нажали Submit - чтобы добавить Компанию
exports.createCompany = async (req, res) => {
  try {
    // *2 - setting author as referenced in Company Model -- >> populate to getCompanyBySlug
    req.body.author = req.user._id;
    const company = await (new Company(req.body)).save();
    req.flash('success', `Компания ${company.name} сохранена! <a href="/kovorking/${company.slug}">Посмотреть компанию</a>`);
    res.redirect(`/kovorking/${company.slug}`);

  } catch(err) {
      if (err.name == 'ValidationError') {
        const errorKeys = Object.keys(err.errors);
        errorKeys.forEach(key => req.flash('error', err.errors[key].message));
        res.redirect('back');
      } else {
        res.render('error', {message:'Something went wrong'});
      }
  }

};

// * 4 - check if the company author id = user id
const confirmOwner = (company, user) => {
  if(!company.author.equals(user._id)) {
    throw Error('Требуются права администратора!');
  }
};

// Зашли в раздел Edit существующей компании
// * 5 - после того как нашли Компанию --> проверили confirmOwner
exports.editCompany = async (req, res) => {
  try {
    const company = await Company.findOne({ _id: req.params.id });
    // confirm the user owns the Company
    confirmOwner(company, req.user);

    res.render('editCompany', { title: `Редактировать данные ${company.name}`, company});
  } catch(e) {
    res.render('error', {message:'Something went wrong'});
  }
};

// POST: Сделали Submit обновленных данных по Компании из раздела Edit
exports.updateCompany = async (req, res) => {
  try {
    //Set the location data to be a point (dissapears after school update)
    req.body.location.type = 'Point';

    const company = await Company.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true }).exec();
    req.flash('success', `Информация о компании <strong>${company.name}</strong> обнавлена! <a href="/kovorking/${company.slug}">Посмотреть компанию</a>`);
    res.redirect(`/companies/${company._id}/edit`);
  } catch(err) {
      if (err.name == 'ValidationError') {
        const errorKeys = Object.keys(err.errors);
        errorKeys.forEach(key => req.flash('error', err.errors[key].message));
        res.redirect('back');
      } else {
        res.render('error', {message:'Something went wrong'});
      }
  }
};

// Страница Компании
exports.getCompanyBySlug = async (req, res, next) => {
 
  try {
    // * 3 - add .populate to get all author data instead of just ObjectId(used in Company Model)
    // ---> next Stop users that don't own a Company from Editing Companies --> Function Confirm Owner (used in editCompany)
    const company = await Company.findOne({ slug: req.params.slug }).populate('author reviews');

    // render 404 if no matching company found (not to display "someth went wrong")
    if (!company) {
      next();
      return;
    }

    const canonical = req.params.slug;
 
    res.render('company', { title: company.name, company, canonical });
  } catch(e) {
    res.render('error', {message:'Something went wrong'});
  }
};

// ФОРМА SUBMIT по EMAIL
// Страница Добавить Компанию
exports.submitForm = (req, res) => {
  res.render('contact', {title: 'Добавить Компанию'});
};

// Submit New Company
exports.submitCompany = (req, res) => {
  const transport = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS
    }
  });

  const mailOptions = {
        from: `Topkovorking Contact Form <noreply@topkovorking.ru>`,
        to: '2011mckinsey@gmail.com',
        subject: 'Website contact form',
        text: 'This will be filled later',
        html: `Name: ${req.body.name}<br>
              Description: ${req.body.description}<br>
              Address: ${req.body.address}<br>
              Website: ${req.body.url}<br>
              Phone: ${req.body.phone}<br>
              Email: ${req.body.email}<br>
              Tags: ${req.body.tags}
        `,
        attachments: []

    };


    if(req.file) {
      const extension = req.file.mimetype.split('/')[1];
      req.body.photo = `${uuid.v4()}.${extension}`;

      mailOptions.attachments = [{
        filename: req.body.photo,
        content: new Buffer(req.file.buffer)
      }]
    };


  const sendMail = promisify(transport.sendMail, transport);

  sendMail(mailOptions).then((info) => {
    req.flash('success', `Информация о <strong>${req.body.name}</strong> отправлена!`)
    res.redirect(`/submit`);
  }).catch((err) => {
    res.render('error', {message:'Something went wrong'});
  })
};

// SUBWAY: Search for Coworkings near Subway Stations
exports.searchMetro = async (req, res) => {

  try {
    // Pagination
    const page = req.params.page || 1;
    const limit = 10;
    const skip = (page * limit) - limit;

    const tag = req.params.id;

    const companies = await Company
      .find({ subway: tag })
      .skip(skip)
      .limit(limit)
      .sort({ created: 'desc' });

      if (!companies.length) {
        req.flash('info', `Коворкингов на станции метро ${tag.toUpperCase()} не найдено.`);
        res.redirect('back');
        return;
      }

    const metroCount = await Company.getMetroData(tag);
    const { count } = metroCount[0];

    const pages = Math.ceil(count / limit);
    if (!companies.length && skip) {
      req.flash('info', `Вы запросили несуществующую страницу ${page}. Перенаправляем на страницу ${pages}.`);
      res.redirect(`/metro/page/${pages}`);
      return;
    }


    res.render('pageMetro', { companies, tag, count, page, pages });

  } catch (e) {
    res.render('error', {message:'Something went wrong'});
  }


}

// API interface to search within Name and Description Text fields
exports.searchCompanies = async (req, res) => {
  try {
    // score - adds a temp field to the result with score
    const companies = await Company
    // 1- find Companies that match API query
    .find(
      { $text: { $search: req.query.q }},
      { score: { $meta: 'textScore' }}
    )
    // 2 - Sort based on higher score
    .sort({
    score: { $meta: 'textScore' }
  })
    .limit(10);

  res.json(companies);
  } catch (e) {
    res.render('error', {message:'Something went wrong'});
  }
};

//MY TEST API SUBWAY Search
exports.searchCompSubway = async (req, res) => {
  try {
    const companies = await Company
      .find({ subway: req.query.q });

    res.json(companies);
  } catch (e) {
    res.render('error', {message:'Something went wrong'});
  }

}

// API interface to search for nearby Companies on GOOGLE Maps
exports.mapCompanies = async (req, res) => {
  try {
    const coordinates = [req.query.lng, req.query.lat].map(parseFloat);

    const q = {
      location: {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: coordinates
          },
          $maxDistance: 20000 //10000 meters = 10km
        }
      }
    };

    // Use SELECT() to specify what JSON fields we need!! Can use - minus!
    // The LIMIT() to 10 points on the Map
    const companies = await Company.find(q).select('slug name description location photo').limit(100);
    res.json(companies);
  } catch(e) {
    res.render('error', {message:'Something went wrong'});
  }
};

// Map Page
exports.mapPage = (req, res) => {
  res.render('map', { title: 'Карта' });
};

// POST - Add or Remove Company Heart from User Heart Array
exports.heartCompany = async (req, res) => {
  try {
    const hearts = req.user.hearts.map(obj => {
      // Convert each Object in Array to String!!
      return obj.toString();
    });

    // If Array includes Company ID then Pull it otherwise addToSet (adds only once opposed to push)
    const operator = hearts.includes(req.params.id) ? '$pull' : '$addToSet';
    const user = await User
      .findByIdAndUpdate(req.user._id,
                { [operator]: { hearts: req.params.id }},
                { new: true }
              );
    res.json(user)
  } catch(e) {
    res.render('error', {message:'Something went wrong'});
  }
};

//Hearts Page
exports.getHearts = async (req, res) => {
  try {
    // Option 1 - Query User and Populate hearts
    //const user = await User.find({ _id: req.user._id }).populate('hearts');

    // Oprion 2 : Query Companies and find Comp IDs that are in Users Hearts Array!
    // array on user ---> req.user.hearts [IDs of companies]
    const companies = await Company.find({
      _id: { $in: req.user.hearts}
    });
    res.render('companies', { title: 'Все Лайки', companies });
  } catch(e) {
    res.render('error', {message:'Something went wrong'});
  }
}

// TOP page
exports.getTopCompanies = async (req, res) => {
  const companies = await Company.getTopCompanies();
  res.render('topCompanies', { title: 'Рейтинг Компаний', companies });
};

// What is Kovorking Page
exports.whatiskovorking = (req, res) => {
  res.render('whatiskovorking', { title: 'Что такое коворкинг?' });
};

// Contacts Page
exports.contacts = (req, res) => {
  res.render('contacts', { title: 'Компания Topkovorking.ru - Контакты' });
};

// About Page
exports.about = (req, res) => {
  res.render('about', { title: 'О Целях и Команде Topkovorking.ru' });
};



exports.receive = async (req, res) => {
 try {

  const filePath = './public/uploads/data.txt';
   const writeFile = await fs.appendFile(filePath, JSON.stringify(req.body));
   //res.render('fail', { title: 'Оплата не Прошла'});
   res.status(200).send();

 } catch (e) {
  res.render('error', {message:'Something went wrong'});
 }

}


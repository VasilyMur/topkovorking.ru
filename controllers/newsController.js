const mongoose = require('mongoose');
const News = mongoose.model('News');
//const User = mongoose.model('User');
const promisify = require('es6-promisify');


  // Главная Страница - Все Компании
  exports.getNews = async (req, res) => {
    try {
      const page = req.params.page || 1;
      const limit = 2;
      const skip = (page * limit) - limit;
  
      // Query the DB for a list of all Companies
      const newsPromise = News
        .find()
        .skip(skip)
        .limit(limit)
        .sort({ date: 'asc' });
  
      //Promise returns number of companies in DB
      const countPromise = News.count();
  
      //Awit All Promises
      const [news, count] = await Promise.all([newsPromise, countPromise]);
    
      const pages = Math.ceil(count / limit);
      if (!news.length && skip) {
        req.flash('info', `Вы запросили несуществующую страницу ${page}. Перенаправляем на страницу ${pages}.`);
        res.redirect(`/news/page/${pages}`);
        return;
      }
  
      res.render('newsAll', { news, page, pages, count });

    } catch(e) {
      res.render('error', {message:'Something went wrong'});
    }
  };
  


// Зашли в Раздел Добавить Новость
exports.addNews = (req, res) => {
    res.render('editNews', {title: 'Добавить Новость', metaDescription: 'Добавить Новость на сайт topkovorking.ru'});
  };


exports.createNews = async (req, res) => {

    try {
        req.body.author = req.user._id;
        const news = await (new News(req.body)).save();
        req.flash('success', `Новость "${news.name}" сохранена! <a href="/news/${news.slug}">Посмотреть новость</a>`);
        res.redirect(`/news/${news.slug}`);

    } catch(err) {
        if (err.name == 'ValidationError') {
        const errorKeys = Object.keys(err.errors);
        errorKeys.forEach(key => req.flash('error', err.errors[key].message));
        res.redirect('back');
        } else {
        res.render('error', {message:'Something went wrong'});
        }
    }


}

// * 4 - check if the company author id = user id
const confirmOwner = (news, user) => {

    if(!news.author.equals(user._id)) {
      throw Error('Требуются права администратора!');
    }
  };


exports.editNews = async (req, res) => {
    try {
        const news = await News.findOne({ _id: req.params.id });
        // confirm the user owns the Company
        confirmOwner(news, req.user);
        res.render('editNews', { title: `Редактировать новость "${news.name}"!`, news});
    } catch (e) {
        res.render('error', {message:'Something went wrong'});
    }
}

exports.updateNews = async (req, res) => {

    try {
        const news = await News.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true }).exec();
        req.flash('success', `Новость "<strong>${news.name}</strong>" обнавлена! <a href="/news/${news.slug}">Посмотреть новость</a>`);
        res.redirect(`/news/${news._id}/edit`);
    } catch(err) {
        if (err.name == 'ValidationError') {
            const errorKeys = Object.keys(err.errors);
            errorKeys.forEach(key => req.flash('error', err.errors[key].message));
            res.redirect('back');
        } else {
            res.render('error', {message:'Something went wrong'});
        }
    }

}



exports.getNewsBySlug = async (req, res) => {
    try {
        const news = await News.findOne({ slug: req.params.slug }).populate('author');

        if (!news) {
            next();
            return;
            }

        res.render('newsSingle', { title: news.name, news});
    } catch(e) {
        res.render('error', {message:'Something went wrong'});
    }

}






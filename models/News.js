const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const slugify = require('slugify');
const validators = require('mongoose-validators');


const newsSchema = new mongoose.Schema({

    name: {
        type: String,
        trim: true,
        required: 'Введите название статьи',
    },
    nameSlug: {
        type: String,
        trim: true,
        required: 'Введите название статьи',
    },
    date: {
        type: Date, 
        required: true
    },
    venue: {
        type: String,
        trim: true,
        required: 'Введите название коворкинга',
    },
    venueSlug: {
        type: String,
        trim: true,
        required: 'Введите slug',
    },
    metaTitle: {
        type: String,
        trim: true,
        required: 'Введите название meta названия',
    },
    metaDescr: {
        type: String,
        trim: true,
        required: 'Введите название meta описания',
    },
    body: {
        type: String,
        trim: true
    },
    created: {
        type: Date,
        default: Date.now
      },
    slug: String,
    photo: String,
    author: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: 'Введите имя автора'
      }


});


newsSchema.pre('save', function(next) {
    if (!this.isModified('nameSlug')) {
      next();
      return;
    }
    this.slug = slugify(this.nameSlug).toLowerCase();
  
    next();
  
  });






module.exports = mongoose.model('News', newsSchema);
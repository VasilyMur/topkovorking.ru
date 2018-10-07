/*
  This is a file of data and helper functions that we can expose and use in our templating function
*/
const moment = require('moment');

exports.slugify = require('slugify');

// FS is a built in module to node that let's us read files from the system we're running on
const fs = require('fs');

// moment.js is a handy library for displaying dates. We need this in our templates to display things like "Posted 5 minutes ago"
exports.moment = require('moment');

// Dump is a handy debugging function we can use to sort of "console.log" our data
exports.dump = (obj) => JSON.stringify(obj, null, 2);

// Making a static map is really long - this is a handy helper function to make one
exports.staticMap = ([lng, lat]) => `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=12&size=800x150&key=${process.env.MAP_KEY}&markers=${lat},${lng}&scale=2`;
// inserting an SVG
exports.icon = (name) => fs.readFileSync(`./public/images/icons/${name}.svg`);

// Some details about the site
exports.siteName = `Topkovorking.ru`;

exports.menu = [
  { slug: '/top', title: 'Рейтинг', icon: 'top', },
  { slug: '/map', title: 'Карта', icon: 'map', },
  { slug: '/submit', title: 'Добавить', icon: 'add', },
  { slug: '/about', title: 'О нас', icon: 'store', },
];

exports.engDate = () => {
  moment.locale("en");
  const today = new Date()
  const day = moment(today).format('dddd').toLowerCase()
  return day;
}

exports.schedule = (timeTable) => {

  moment.locale("en")
  const today = new Date()
  const day = moment(today).format('dddd').toLowerCase()

  const schedule = timeTable[day];
  const numberFrom = parseInt(schedule[0].split(':')[0]);
  const numberTo = parseInt(schedule[1].split(':')[0]);

  const digits = Array.from({ length: 24 }, (res, i) => {
    if (numberFrom === 0 && numberTo === 24) {
      return `<div class="hour green">❚</div>`
    } else {
      if ((i + 1) < ( numberFrom)) {
        return `<div class="hour red">❚</div>`
      } 
      if ( ((i + 1)  >= numberFrom) && i < numberTo -1 ) {
        return `<div class="hour green">❚</div>`
      } 
      if ( i  >= numberTo - 1 ) {
        return `<div class="hour red">❚</div>`
      } 
    }
  }).join('')

  return digits;
}

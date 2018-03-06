import '../sass/style.scss';

import autocomplete from './modules/autocomplete';
import typeAhead from './modules/typeAhead';
import makeMap from './modules/map';
import ajaxHeart from './modules/heart';


import subway from './modules/subway';
import subwayFront from './modules/subwayFront';

subway(document.querySelector('#subway'));


subwayFront(document.querySelector('#subway__front'));



autocomplete( document.querySelector('#address'), document.querySelector('#lat'), document.querySelector('#lng'));

typeAhead(document.querySelector('.search'));

makeMap(document.querySelector('#map'));

const heartForms = document.querySelectorAll('form.heart');
heartForms.forEach(form => {
  form.addEventListener('submit', ajaxHeart);
})










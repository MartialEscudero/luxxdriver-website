var $ = require('jquery');
window.$ = $;

$(document).ready(function(){

  $(window).scroll(function() {
    if ($(window).scrollTop() >= 700) {
      $('#bg').removeClass('bgNoScroll');
      $('#bg').addClass('bgScroll');
    }
    if ($(window).scrollTop() <= 700) {
      $('#bg').addClass('bgNoScroll');
      $('#bg').removeClass('bgScroll');
    }
  })
  
});
$(document).ready(function () {
  $('.main_btna').on('click', function(){
    $('.overlay').animate({
      opacity: 'toggle'

    }, 1000);
    $('.modal').animate({
      
      height: 'show'

    }, 3000);

  });
  $('.close').on('click', function () {
    $('.modal').animate({

      height: 'hide'

    }, 2000);
    $('.overlay').animate({
      opacity: 'toggle'

    }, 1000);
  });
  $('ul:eq(2)').on('click', function () {
    $('.overlay').animate({
      opacity: 'toggle'

    }, 1000);
    $('.modal').animate({

      height: 'show'

    }, 3000);

  });
  $('.close').on('click', function () {
    $('.modal').animate({

      height: 'hide'

    }, 2000);
    $('.overlay').animate({
      opacity: 'toggle'

    }, 1000);
  });
  $('.main_btn').on('click', function () {
    $('.overlay').animate({
      opacity: 'toggle'

    }, 1000);
    $('.modal').animate({

      height: 'show'

    }, 3000);

  });
  $('.close').on('click', function () {
    $('.modal').animate({

      height: 'hide'

    }, 2000);
    $('.overlay').animate({
      opacity: 'toggle'

    }, 1000);
  });

});
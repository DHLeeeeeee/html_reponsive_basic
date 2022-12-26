$(function () {
  $('.mbtn').on('click', function () {
    $(this).toggleClass('on');
    $('.gnb').toggleClass('on');
  });

  $('.gnb > ul > li > a').on('click', function (e) {
    if ($(window).width() < 769) {
      e.preventDefault();
      $(this).parent().siblings().find('.submenu').slideUp();
      $(this).next('.submenu').slideToggle();
    }
  });
});

$(window).on('resize', function () {
  if ($(window).width() > 768) {
    $('.submenu').removeAttr('style');
  }
});

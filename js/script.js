$(document).ready(function () {

  $('.works__slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    items: 1,
    navText: [],
    responsive: {
      0: {
        dots: false
      },
      1024: {
        dots: true
      }
    }
  });

  $('.carousel').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    dots: false,
    navText: [],
    responsive: {
      0: {
        items: 1,
      },
      480: {
        items: 2,
      },
      880: {
        items: 3,
      },
      1024: {
        items: 4,
      }
    }
  });

  $('.menu__link, .fixed-menu__right--main .menu li:not(.link) a').on('click', function (e) {
    e.preventDefault();
    let target = $(this).attr('href').slice(1);
    $('html, body').stop().animate({scrollTop: $(target).offset().top}, 1000);
    return false;
  });

  //Modal-form
  $('.container').on("click", '.header__button, .analytics__button', function (e) {
    e.preventDefault();

    if ($(".form-modal--form").hasClass('form-modal--active')) {
      $(".form-modal--form").removeClass('form-modal--active');
    } else {
      $(".form-modal--form").addClass('form-modal--active');
    }
  });

  $('.container').on("click", '.video__item', function (e) {
    e.preventDefault();

    let url = $(this).attr('data-url');

    if ($(".form-modal--video").hasClass('form-modal--active')) {
      $(".form-modal--video").removeClass('form-modal--active');
      $(".form-modal__video").html('');
    } else {
      $(".form-modal--video").addClass('form-modal--active');
      $(".form-modal__video").html(url);
    }
  });

  //Modal-form close
  $('.container').on("click", '.form-modal__close', function (e) {
    e.preventDefault();
    $(".form-modal").removeClass('form-modal--active');
    $(".form-modal__video").html('');
  });

  //Modal-popup, modal-form close
  $('.container').on("click", '.form-modal__center', function (e) {
    if ($(e.target).hasClass('form-modal__center')) {
      $(".form-modal").removeClass('form-modal--active');
      $(".form-modal__video").html('');
    }
  });

  //Modal-popup, modal-form close
  $('.container').on("click", '.hamburger', function (e) {
    if ($(".menu").hasClass('menu--active')) {
      $(".menu").removeClass('menu--active');
      $(".menu").slideUp(500);
      $(this).removeClass('hamburger--active');
    } else {
      $(".menu").addClass('menu--active');
      $(".menu").slideDown(500);
      $(this).addClass('hamburger--active');
    }
  });

});

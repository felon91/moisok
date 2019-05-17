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

  $('.menu__link').on('click', function (e) {
    e.preventDefault();
    let target = $(this).attr('href');
    $('html, body').stop().animate({scrollTop: $(target).offset().top}, 1000);
    return false;
  });

});

$('.dv_give_rating')
  .rating
  // {
  //      "click": function (e) {
  //          console.log(e);
  //          $("#basicInput").val(e.stars);
  //      }
  //  }
  ();

$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll >= 100) {
    $('.dv_fixed_navbar').addClass('dv_fixed_menu');
    $('.dv_logo_icon, .dv_menu_top>li>a').addClass('dv_menu_scroll_style');
  } else {
    $('.dv_fixed_navbar').removeClass('dv_fixed_menu');
    $('.dv_logo_icon, .dv_menu_top>li>a').removeClass('dv_menu_scroll_style');
  }
});

$('.dv_home_slider').owlCarousel({
  slideSpeed: 300,
  paginationSpeed: 400,
  singleItem: true,
  nav: true,
  loop: true,
  navClass: ['owl-prev dv_sploffer_owl_prev', 'owl-next dv_sploffer_owl_next'],
  margin: 15,
  autoHeight: true,
  autoplay: false,
  autoplayTimeout: 5000,
  navText: [
    "<img src='fonts/feather-icons/chevron-left.svg'>",
    "<img src='fonts/feather-icons/chevron-right.svg'>"
  ],
  autoplayHoverPause: false,
  dots: false,
  items: 3,
  responsive: {
    320: {
      items: 1
    },
    480: {
      items: 1
    },
    600: {
      items: 2
    },
    991: {
      items: 3
    }
  }
});

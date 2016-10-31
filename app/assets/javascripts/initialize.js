/* eslint-disable no-undef*/

$(document).ready(() => {
  $('.carousel').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    appendArrows: $('.carousel-subtext'),
    dots: true,
    autoplay: false,
    autoplaySpeed: 2000,
  });
});

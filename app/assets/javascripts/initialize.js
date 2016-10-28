/* eslint-disable no-undef*/

$(document).ready(() => {
  $('.carousel').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    appendArrows: $('.carousel-subtext'),
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
  });
});

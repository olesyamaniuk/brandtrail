$(function () {
  $(".p-j-gallery-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    dots: false,
    centerMode: false,
    cssEase: "linear",
    prevArrow: ".p-j-gallery-list-left",
    nextArrow: ".p-j-gallery-list-right",
  });
});

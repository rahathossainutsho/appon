$('.slide').slick({
    dots:true,
    infinite: true,
    fade:true,
    speed: 1000,
    autoplay:true,
    autoplaySpeed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });


$('.feature-manu-one').addClass('active').click(function(){
    $('.feature-manu-two').removeClass('active');
    $('.feature-manu-three').removeClass('active');
    $('.feature-manu-four').removeClass('active');
    $('.feature-manu-five').removeClass('active');
    $(".feature-details-one").fadeIn();
    $(".feature-details-two").fadeOut();
    $(".feature-details-three").fadeOut();
    $(".feature-details-four").fadeOut();
    $(".feature-details-five").fadeOut();
});


$('.feature-manu-two').click(function(){
    $('.feature-manu-two').addClass('active');
    $('.feature-manu-one').removeClass('active');
    $('.feature-manu-three').removeClass('active');
    $('.feature-manu-four').removeClass('active');
    $('.feature-manu-five').removeClass('active');
    $(".feature-details-two").fadeIn();
    $(".feature-details-one").fadeOut();
    $(".feature-details-three").fadeOut();
    $(".feature-details-four").fadeOut();
    $(".feature-details-five").fadeOut();
});

$('.feature-manu-three').click(function(){
    $('.feature-manu-three').addClass('active');
    $('.feature-manu-one').removeClass('active');
    $('.feature-manu-two').removeClass('active');
    $('.feature-manu-four').removeClass('active');
    $('.feature-manu-five').removeClass('active');
    $(".feature-details-three").fadeIn();
    $(".feature-details-one").fadeOut();
    $(".feature-details-two").fadeOut();
    $(".feature-details-four").fadeOut();
    $(".feature-details-five").fadeOut();
});

$('.feature-manu-four').click(function(){
    $('.feature-manu-four').addClass('active');
    $('.feature-manu-two').removeClass('active');
    $('.feature-manu-three').removeClass('active');
    $('.feature-manu-one').removeClass('active');
    $('.feature-manu-five').removeClass('active');
    $(".feature-details-four").fadeIn();
    $(".feature-details-one").fadeOut();
    $(".feature-details-two").fadeOut();
    $(".feature-details-three").fadeOut();
    $(".feature-details-five").fadeOut();
});

$('.feature-manu-five').click(function(){
    $('.feature-manu-five').addClass('active');
    $('.feature-manu-two').removeClass('active');
    $('.feature-manu-three').removeClass('active');
    $('.feature-manu-four').removeClass('active');
    $('.feature-manu-one').removeClass('active');
    $(".feature-details-five").fadeIn();
    $(".feature-details-one").fadeOut();
    $(".feature-details-two").fadeOut();
    $(".feature-details-three").fadeOut();
    $(".feature-details-four").fadeOut();
});

$('.images').slick({
    dots:true,
    infinite: true,
    speed: 1000,
    autoplay:true,
    autoplaySpeed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows:false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });



 $('.feedback-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay:true,
  arrows: false,
  autoplaySpeed: 1000,
  fade: true,
  asNavFor: '.feedback-image-slider'
});

$('.feedback-image-slider').slick({
  slidesToShow: 3,
  autoplay:true,
  autoplaySpeed: 1000,
  slidesToScroll: 1,
  asNavFor: '.feedback-slider',
  dots:true,
  centerMode: true,
  focusOnSelect: true,
  arrows: false,
});














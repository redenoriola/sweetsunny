
$(document).ready(function () {
  $('.scrollspy').scrollSpy();
  $('.modal').modal();
  $('.sidenav').sidenav();
  $("#navbar ul li a:nth-child(1).active").addClass('anim');  //set Active first Navigation on load

  displayCarousel();
  displayPortfolio();

  $(window).on('scroll', function () {
    $('#navbar ul li a').each(function () {
      $("#navbar ul li a").removeClass('anim'); //avoid duplicates of anim in each class
      if ($('#navbar ul li a').hasClass('active')) {
        $("#navbar ul li a.active").addClass('anim'); //set animation to navigation element
      }
    });
  });

  $(".portfolio-wrapper").click(function () {
    var checkWidth = $(window).width();
    var img = $(this).find("img").attr("src");
    $('#image-modal').modal('open');
    if (checkWidth > 480) {
      var modalHeight = $('#image-modal').outerHeight();
      $('#image-modal').css("width", modalHeight);
    }
    else {
      $('#image-modal').css("width", "100vw");
    }
    img = "url('" + img + "')";
    $("#image-modal .image-container").css("background-image", img);
  });


  $(".card-image").click(function () {
    var checkWidth = $(window).width();
    var img = $(this).css("background-image");
    $('#image-modal').modal('open');
    if (checkWidth > 480) {
      var modalHeight = $('#image-modal').outerHeight();
      $('#image-modal').css("width", modalHeight);
    }
    else {
      $('#image-modal').css("width", "100vw");
    }
    $('.image-container').css("background-image", img);

  });
  // CONTACT FORM
  $('#contact-form').submit(function (e) {
    e.preventDefault();
    $.ajax({
      method: 'POST',
      url: '//formspree.io/reden.oriola@bicol-u.edu.ph',
      data: $('#contact-form').serialize(),
      datatype: 'json',
      success: function () {
        console.log('success');
        $('.alert-success').css("display", "block");
      },
      fail: function () {
        $('.alert-fail').css("display", "block");
      }
    });
  });
  $('#order-cancel').click(function () {
    $("#order-modal").modal('close');
  })
  $('.close-alert').click(function () {
    $(".alert-success,.alert-fail").css("display", "none");
  })
}); //end of document ready

function displayPortfolio() {
  setTimeout(function () {
    $(".portfolio .portfolio-wrapper").each(function () {
      var setHeight = $(".portfolio .portfolio-wrapper:nth-child(1)").outerWidth();
      var img = $(this).find("img").attr('src');
      $(this).find("img").css("display", "none");
      $(this).css({ "height": setHeight, "background-image": "url(" + img + ")", "background-size": "cover", "background-position": "center" });
    });
  }, 100);
}
function displayCarousel() {
  var checkWidth = $(window).width();
  var show, slide;
  if (checkWidth > 1080) {
    show = 4;
    slide = 4
  }
  else if (checkWidth < 1080 && checkWidth > 860) {
    show = 3;
    slide = 3;
  }
  else if (checkWidth < 860 && checkWidth > 560) {
    show = 2;
    slide = 2;
  }
  else if (checkWidth < 560) {
    show = 1;
    slide = 1;
  }
  $('.autoplay').slick({
    slidesToShow: show,
    slidesToScroll: slide,
    autoplay: false,
    autoplaySpeed: 3000,
    dots: true,
  });
}

function goBack() {
  window.history.back();
}
$(function () {
  var filterList = {
    init: function () {
      // MixItUp plugin
      // http://mixitup.io
      $('#portfoliolist').mixItUp({
        selectors: {
          target: '.portfolio',
          filter: '.filter'
        },
        load: {
          filter: '.flavoree' // show app tab on first load
        }
      });
    }
  };
  // Run the show!
  filterList.init();
});	
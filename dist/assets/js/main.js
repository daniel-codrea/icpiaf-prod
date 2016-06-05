// Social Icons Tooltip
$('.social-link').tooltip();
socialMediaShareURLs("#facebookSL");
socialMediaShareURLs("#twitterSL");
socialMediaShareURLs("#linkedinSL");
socialMediaShareURLs("#googlePlusSL");

// Page Loader
$(window).load(function() {
  "use strict";
  $('#loader').fadeOut();
});

//Bootsrap slider carousel
$('#carousel-slider').carousel();

$('a[data-slide="prev"]').click(function () {
    $('#carousel-slider').carousel('prev');
});

$('a[data-slide="next"]').click(function () {
    $('#carousel-slider').carousel('next');
});

$(document).ready(function($) {
  "use strict";
  // Counter
  $('.timer').countTo();
  $('.counter-item').appear(function() {
    $('.timer').countTo();
  }, {
    accY: -100
  });

  $("#contact-form").unbind().submit(function() {
    return false;
  });
  hideError('#contact_name', '#contact_name_msg');
  hideError('#contact_email', '#contact_email_msg');
  hideError('#contact_subject', '#contact_subject_msg');
  hideError('#contact_message', '#contact_message_msg');
  $('#contact_submit').off().on("click", function(e) {
    e.preventDefault();
    if($("#contact_name").val() == "") {
      $('#contact_name_msg').html("Numele este obligatoriu.");
      return false;
    }
    if($("#contact_email").val() == "") {
      $('#contact_email_msg').html("Adresa de email este obligatorie.");
      return false;
    }
    var emailRegex = new RegExp(/^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/i);
    var valid = emailRegex.test($("#contact_email").val());
    if(!valid) {
      $('#contact_email_msg').html("Adresa de email nu este valida.");
      return false;
    }

    if($("#contact_subject").val() == "") {
      $('#contact_subject_msg').html("Subiectul este obligatoriu.");
      return false;
    }

    if($("#contact_message").val() == "") {
      $('#contact_message_msg').html("Mesajul este obligatoriu.");
      return false;
    }

    var successCallback = function(data, status, jqXHR) {
      if(jqXHR.status == 200) {
        $("#contact_name").val("");
        $("#contact_email").val("");
        $("#contact_phone").val("");
        $("#contact_subject").val("");
        $("#contact_message").val("");
        $('#contact_form_message').html("Va multumim! Mesajul dumneavoastra a fost trimis cu succes! Vom reveni cu un raspuns in cel mai scurt timp posibil.");
      } else if(jqXHR.status == 206){
        $('#contact_form_error').html("Ne pare rau. A intervenit o eroare si nu am putut sa trimitem mesajul dumneavoastra. Va rugam sa incercati mai tarziu.");
      }
    };
    var errorCallback = function(error, status, jqXHR) {
      if(jqXHR.status == 404) {
        console.log(error);
      }
    };

    $.ajax({
      type: "POST",
      data: $('#contact-form').serialize(),
      url: "assets/php/contact.php",
      success: successCallback,
      error: errorCallback
    });
  });

  $("#oferta-form").unbind().submit(function() {
    return false;
  });
  hideError('#oferta_comp', '#oferta_comp_msg');
  hideError('#oferta_address', '#oferta_address_msg');
  hideError('#oferta_email', '#oferta_email_msg');
  hideError('#oferta_cp', '#oferta_cp_msg');
  hideError('#oferta_message', '#oferta_message_msg');
  $('#oferta_submit').off().on("click", function(e) {
    e.preventDefault();

    if($("#oferta_comp").val() == "") {
      $('#oferta_comp_msg').html("Numele companiei este obligatoriu.");
      return false;
    }

    if($("#oferta_address").val() == "") {
      $('#oferta_address_msg').html("Adresa companiei este obligatorie.");
      return false;
    }

    if($("#oferta_email").val() == "") {
      $('#oferta_email_msg').html("Adresa de email este obligatorie.");
      return false;
    }
    var emailRegex = new RegExp(/^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/i);
    var valid = emailRegex.test($("#oferta_email").val());
    if(!valid) {
      $('#oferta_email_msg').html("Adresa de email nu este valida.");
      return false;
    }

    if($("#oferta_cp").val() == "") {
      $('#oferta_cp_msg').html("Persoana de contact este obligatorie.");
      return false;
    }

    if($("#oferta_message").val() == "") {
      $('#oferta_message_msg').html("Mesajul este obligatoriu.");
      return false;
    }

    var successCallback = function(data, status, jqXHR) {
      if(jqXHR.status == 200) {
        $("#oferta_comp").val("");
        $("#oferta_address").val("");
        $("#oferta_email").val("");
        $("#oferta_phone").val("");
        $("#oferta_cp").val("");
        $("#oferta_message").val("");
        $('#oferta_form_success').html("Va multumim! Cererea dumneavoastra a fost trimisa cu succes! Vom reveni cu un raspuns in cel mai scurt timp posibil.");
      } else if(jqXHR.status == 206){
        $('#oferta_form_error').html("Ne pare rau. A intervenit o eroare si nu am putut sa trimitem cererea dumneavoastra. Va rugam sa incercati mai tarziu.");
      }
    };
    var errorCallback = function(error, status, jqXHR) {
      if(jqXHR.status == 404) {
        console.log(error);
      }
    };

    $.ajax({
      type: "POST",
      data: $('#oferta-form').serialize(),
      url: "assets/php/oferta.php",
      success: successCallback,
      error: errorCallback
    });
  });

  var currentDate = new Date();
  $('#currentYear').html((currentDate).getFullYear());

  $('#tipue_search_input').tipuesearch({
    'mode': 'live'
  });

  // Nav Menu & Search
  $(".nav > li:has(ul)").addClass("drop");
  $(".nav > li.drop > ul").addClass("dropdown");
  $(".nav > li.drop > ul.dropdown ul").addClass("sup-dropdown");

  $('.show-search').click(function() {
    $('.full-search').fadeIn(300);
    $('.full-search input').focus();
  });
  $('.full-search input').blur(function() {
    $('.full-search').fadeOut(300);
  });

  //	Back Top Link
  var offset = 200;
  var duration = 500;
  $(window).scroll(function() {
    if ($(this).scrollTop() > offset) {
      $('.back-to-top').fadeIn(400);
    } else {
      $('.back-to-top').fadeOut(400);
    }
  });
  $('.back-to-top').click(function(event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, 600);
    return false;
  })

  // Touch Slider
  var time = 4.4,
    $progressBar,
    $bar,
    $elem,
    isPause,
    tick,
    percentTime;
  $('.touch-slider').each(function() {
    var owl = jQuery(this),
      sliderNav = $(this).attr('data-slider-navigation'),
      sliderPag = $(this).attr('data-slider-pagination'),
      sliderProgressBar = $(this).attr('data-slider-progress-bar');
    if (sliderNav == 'false' || sliderNav == '0') {
      var returnSliderNav = false
    } else {
      var returnSliderNav = true
    }
    if (sliderPag == 'true' || sliderPag == '1') {
      var returnSliderPag = true
    } else {
      var returnSliderPag = false
    }
    if (sliderProgressBar == 'true' || sliderProgressBar == '1') {
      var returnSliderProgressBar = progressBar
      var returnAutoPlay = false
    } else {
      var returnSliderProgressBar = false
      var returnAutoPlay = true
    }

    owl.owlCarousel({
      navigation: returnSliderNav,
      pagination: returnSliderPag,
      slideSpeed: 400,
      paginationSpeed: 400,
      lazyLoad: true,
      singleItem: true,
      autoHeight: true,
      autoPlay: returnAutoPlay,
      stopOnHover: returnAutoPlay,
      transitionStyle: "fade",
      afterInit: returnSliderProgressBar,
      startDragging: pauseOnDragging
    });
  });

  function progressBar(elem) {
    $elem = elem;
    buildProgressBar();
    start();
  }

  function buildProgressBar() {
    $progressBar = $("<div>", {
      id: "progressBar"
    });
    $bar = $("<div>", {
      id: "bar"
    });
    $progressBar.append($bar).prependTo($elem);
  }

  function pauseOnDragging() {
    isPause = true;
  }

  //testimonial Slider
  $(document).ready(function(){
      /*=== clients ====*/
      $('#testimonial-carousel').owlCarousel({
          navigation: false, // Show next and prev buttons
          slideSpeed: 800,
          paginationSpeed: 400,
          autoPlay: false,
          singleItem: true,
          pagination : true,
          items : 1,
          itemsCustom : false,
          itemsDesktop : [1199,4],
          itemsDesktopSmall : [980,3],
          itemsTablet: [768,2],
          itemsTabletSmall: false,
          itemsMobile : [479,1],
      });

  });

  // Client Logo
  $("#client-logo").owlCarousel({
    navigation : false,
    pagination: false,
    slideSpeed : 400,
    stopOnHover: true,
    autoPlay: 3000,
    items : 3,
    itemsDesktopSmall : [900,3],
    itemsTablet: [640,2],
    itemsMobile : [480, 1]
  });

  // Recent-projects
  $("#projects-carousel").owlCarousel({
    navigation : true,
    pagination: false,
    slideSpeed : 400,
    stopOnHover: true,
    autoPlay: 3000,
    items : 3,
    itemsDesktop : [1024,3],
    itemsDesktopSmall : [960,2],
    itemsTablet: [640,2],
    itemsMobile : [480, 1]
  });

  // Touch Carousel
  $(".touch-slider").owlCarousel({
    navigation: true,
    pagination: true,
    slideSpeed: 2500,
    stopOnHover: true,
    autoPlay: 3000,
    singleItem: true,
    autoHeight: true,
    transitionStyle: "fade"
  });

  // Pie Charts
  var pieChartClass = 'pieChart',
    pieChartLoadedClass = 'pie-chart-loaded';

  function initPieCharts() {
    var chart = $('.' + pieChartClass);
    chart.each(function() {
      $(this).appear(function() {
        var $this = $(this),
          chartBarColor = ($this.data('bar-color')) ? $this.data('bar-color') : "#F54F36",
          chartBarWidth = ($this.data('bar-width')) ? ($this.data('bar-width')) : 150
        if (!$this.hasClass(pieChartLoadedClass)) {
          $this.easyPieChart({
            animate: 2000,
            size: chartBarWidth,
            lineWidth: 2,
            scaleColor: false,
            trackColor: "#eee",
            barColor: chartBarColor,
          }).addClass(pieChartLoadedClass);
        }
      });
    });
  }
  initPieCharts();

   //	Nivo Lightbox
  $('.lightbox').nivoLightbox({
    effect: 'fadeScale',
    keyboardNav: true,
    errorMessage: 'The requested content cannot be loaded. Please try again later.'
  });

  //	Change Slider Nav Icons
  $('.touch-slider').find('.owl-prev').html('<i class="fa fa-angle-left"></i>');
  $('.touch-slider').find('.owl-next').html('<i class="fa fa-angle-right"></i>');
  $('.touch-carousel, .testimonials-carousel').find('.owl-prev').html('<i class="fa fa-angle-left"></i>');
  $('.touch-carousel, .testimonials-carousel').find('.owl-next').html('<i class="fa fa-angle-right"></i>');
  $('.read-more').append('<i class="fa fa-angle-right"></i>');

  //	Sticky Header
  (function() {
    var docElem = document.documentElement,
      didScroll = false,
      changeHeaderOn = 100;
    document.querySelector('header');

    function init() {
      window.addEventListener('scroll', function() {
        if (!didScroll) {
          didScroll = true;
          setTimeout(scrollPage, 250);
        }
      }, false);
    }

    function scrollPage() {
      var sy = scrollY();
      if (sy >= changeHeaderOn) {
        $('.top-bar').slideUp(300);
        $("header").addClass("fixed-header");
        if (/iPhone|iPod|BlackBerry/i.test(navigator.userAgent) || $(window).width() < 479) {
          $('.navbar-default .navbar-nav > li > a').css({
            'padding-top': 12 + "px",
            'padding-bottom': 12 + "px"
          })
        } else {
          $('.navbar-default .navbar-nav > li > a').css({
            'padding-top': 8 + "px",
            'padding-bottom': 8 + "px"
          })
          $('.search-side').css({
            'margin-top': 0 + "px"
          });
        };
      } else {
        $('.top-bar').slideDown(300);
        if (/iPhone|iPod|BlackBerry/i.test(navigator.userAgent) || $(window).width() < 479) {
          $('.navbar-default .navbar-nav > li > a').css({
            'padding-top': 15 + "px",
            'padding-bottom': 15 + "px"
          })
        } else {
          $('.navbar-default .navbar-nav > li > a').css({
            'padding-top': 8 + "px",
            'padding-bottom': 8 + "px"
          })
          $('.search-side').css({
            'margin-top': 0 + "px"
          });
        };
      }
      didScroll = false;
    }

    function scrollY() {
      return window.pageYOffset || docElem.scrollTop;
    }
    init();
  })();
});

// End JS Document

// Mixitup portfolio filter
jQuery(function() {
  jQuery('#portfolio-list').mixItUp({
    animation: {
      duration: 800
    }
  });
});

jQuery(function() {
  jQuery('#products').mixItUp({
    animation: {
      duration: 800
    }
  });
});




//Tab
$(document).ready(function() {
    $("div.tab-menu>ul.list-group>li").click(function(e) {
        e.preventDefault();
        $(this).siblings('li.active').removeClass("active");
        $(this).addClass("active");
        var index = $(this).index();
        $("div.tabs-content").removeClass("active");
        $("div.tabs-content").eq(index).addClass("active");
    });
});

// slider
jQuery(document).ready(function() {
  jQuery('.tp-banner').show().revolution({
    dottedOverlay: "none",
    delay: 16000,
    startwidth: 1170,
    startheight: 500,
    hideThumbs: 200,
    thumbWidth: 100,
    thumbHeight: 50,
    thumbAmount: 5,
    navigationType: "bullet",
    navigationArrows: "solo",
    navigationStyle: "preview1",
    touchenabled: "on",
    onHoverStop: "on",
    swipe_velocity: 0.7,
    swipe_min_touches: 1,
    swipe_max_touches: 1,
    drag_block_vertical: false,
    parallax: "mouse",
    parallaxBgFreeze: "on",
    parallaxLevels: [7, 4, 3, 2, 5, 4, 3, 2, 1, 0],
    keyboardNavigation: "off",
    navigationHAlign: "center",
    navigationVAlign: "bottom",
    navigationHOffset: 0,
    navigationVOffset: 20,
    soloArrowLeftHalign: "left",
    soloArrowLeftValign: "center",
    soloArrowLeftHOffset: 20,
    soloArrowLeftVOffset: 0,
    soloArrowRightHalign: "right",
    soloArrowRightValign: "center",
    soloArrowRightHOffset: 20,
    soloArrowRightVOffset: 0,
    shadow: 0,
    fullWidth: "on",
    fullScreen: "off",
    spinner: "spinner1",
    stopLoop: "off",
    stopAfterLoops: -1,
    stopAtSlide: -1,
    shuffle: "off",
    autoHeight: "off",
    forceFullWidth: "off",
    hideThumbsOnMobile: "off",
    hideNavDelayOnMobile: 1500,
    hideBulletsOnMobile: "off",
    hideArrowsOnMobile: "off",
    hideThumbsUnderResolution: 0,
    hideSliderAtLimit: 0,
    hideCaptionAtLimit: 0,
    hideAllCaptionAtLilmit: 0,
    startWithSlide: 0,
    videoJsPath: "rs-plugin/videojs/",
    fullScreenOffsetContainer: ""
  });
});


/**
 * Slick Nav
 */

$('.wpb-mobile-menu').slicknav({
  prependTo: '.navbar-header',
  parentTag: 'span',
  allowParentLinks: true,
  duplicate: false,
  label: '',
  closedSymbol: '<i class="fa fa-angle-right"></i>',
  openedSymbol: '<i class="fa fa-angle-down"></i>',
});

function socialMediaShareURLs(id) {
    var url = window.location.href;
    var facebookShareUrl = "",
        twitterShareUrl = "",
        linkedinShareUrl = "",
        googlePlusShareUrl = "",
        socialMedia = $(id).data("social-media"),
        title = $("#productTitle").html(),
        description = $("#productDescription").html();
    ;
    facebookShareUrl = "https://www.facebook.com/sharer.php?u=" + url;
    twitterShareUrl = "http://twitter.com/share?text=Check%20out&url=" + url;
    linkedinShareUrl = "http://www.linkedin.com/shareArticle?mini=true&url=" + url + "&title=" + title + "&summary=" + description;
    googlePlusShareUrl = "https://plus.google.com/share?url=" + url;

    if (socialMedia == "facebook") {
        $(id).attr("href", facebookShareUrl);
    } else if (socialMedia == "twitter") {
        $(id).attr("href", twitterShareUrl);
    } else if (socialMedia == "linkedin") {
        $(id).attr("href", linkedinShareUrl);
    } else if (socialMedia == "googlePlus") {
        $(id).attr("href", googlePlusShareUrl);
    }
}

function hideError(element, errorField) {
  var previousValue = $(element).val();
  $(element).keyup(function(e) {
      var currentValue = $(this).val();
      if(currentValue != previousValue) {
           $(errorField).html("");
      }
  });
}

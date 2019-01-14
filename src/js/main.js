$(document).ready(function() {

  'use strict';

  // SOUNDCLOUD PLAYER
  // ================================
  var musicFrame = $('.music-frame');
  var musicButton = $('.music-button');
  musicFrame.hide();
  musicButton.click(function(){
    musicFrame.toggle();
  });

  $(window).on('scroll', function() {
    var wScroll = $(window).scrollTop();
    if (wScroll >= 800) {
      musicButton.css('right', '30px');
      musicFrame.css('right', '60px');
    } else if (wScroll < 800) {
      musicButton.css('right', '-50px');
      musicFrame.css('right', '-300px').hide();
    }
  });


  // NAVBAR SMOOTH SCROLLING
  // ================================
  $('.navbar-nav').localScroll();


  // MAGNIFIC POPUP FOR BRIDE GALLERY
  // ================================
  $('.bride-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: {
      enabled: true
    },
    mainClass: 'mfp-with-zoom',
    zoom: {
      enabled: true,
      duration: 300,
      easing: 'ease-in-out',
      opener: function(openerElement) {
        return openerElement.is('img') ? openerElement : openerElement.find('img');
      }
    }
  });


  // MAGNIFIC POPUP FOR GROOM GALLERY
  // ==============================
  $('.groom-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: {
      enabled: true
    },
    mainClass: 'mfp-with-zoom',
    zoom: {
      enabled: true,
      duration: 300,
      easing: 'ease-in-out',
      opener: function(openerElement) {
        return openerElement.is('img') ? openerElement : openerElement.find('img');
      }
    }
  });

});


"use strict";

$(document).ready(function() {

  var years = {};
  var currYear = '1986';

  // Initialize animation Tweens

  TweenMax.to(
    $('.droplet.first'),
    1.5,
    {
      "backgroundPosition": "0px 70px",
      "opacity": 0,
      "repeat": -1
    }
  );
  TweenMax.to(
    $('.hug'),
    0.75,
    {
      "transform": "scale(1.05)",
      "repeat": -1,
      "yoyo": true
    }
  );
  TweenMax.to(
    $('.zah'),
    3,
    {
      "rotationY": "360deg",
      "repeat": -1,
      "ease": Linear.easeNone
    }
  );

  $('[data-year]').each(function(index, el) {
    var offset = $(el).offset()
    years[offset.top] = $(el).data('year');
  });

  // Initialize the scroll library

  var s = skrollr.init({
    render: function(data) {
      console.log(data.curTop);
      for (var i in years) {
        if (i < data.curTop + 250) {
          currYear = years[i];
        } else {
          break;
        }
      }
      $('nav .year').removeClass('active');
      $('nav .year.' + currYear).addClass('active');
    },
    constants: {
      birth: function() {
        var off = $('.birth').offset();
        return off.top;
      }
    }
  });

  // Handle mobile menu clicks

  $('.small').on('click', function(e) {
    $('.big').toggleClass('active');
  });

  // Handle clicks on timeline

  $('nav .year').on('click', function(e) {
    $('.big').removeClass('active');
    var currYear = $(e.currentTarget).find('span').html();
    var offset = $('[data-year="' + currYear + '"]').offset();
    s.animateTo(offset.top, {
      duration: 1250
    });
  });

  $(window).resize(function() {
    $('video').width($(window).width());
  });
  $('video').width($(window).width());

  var isMobile = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry)/g);
  if(! isMobile) {
    // User-Agent is not IPhone, IPod, IPad, Android or BlackBerry
    $('video').html('<video loop="1" muted autoplay="autoplay" poster="http://therapup.net/wp-content/uploads/2013/04/Puff.gif">'
    + '<source src="video.webm" type="video/webm">'+' <source src="video.m4v">'+' <source src="video/dancing.mp4" type="video/mp4">' + '</video>');
  } else {
    $('video').html('<img src="http://therapup.net/wp-content/uploads/2013/04/Puff.gif">');
  }

});
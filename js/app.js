
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
    }
  });

  // Handle download reporting

  $('.wallpapers a').click(function(e) {
    _gaq.push(['_trackEvent', 'Wallpapers', 'Download', $(e.target).html()]);
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
  $('.arrow').on('click', function(e) {
    $('.big').removeClass('active');
    var currYear = '1986';
    var offset = $('[data-year="' + currYear + '"]').offset();
    s.animateTo(offset.top, {
      duration: 1250
    });
  });
  $('.close').on('click', function(e) {
    $('.big').removeClass('active');
  });

  $(window).resize(function() {
    $('video').width($(window).width());
  });
  $('video').width($(window).width());

});

"use strict";

$(document).ready(function() {
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
		$('.zah'),
		3,
		{
			"rotationY": "360deg",
			"repeat": -1,
			"ease": Linear.easeNone
		}
	);
	var years = {};
	var currYear = '1986';
	$('[data-year]').each(function(index, el) {
		var offset = $(el).offset()
		years[offset.top] = $(el).data('year');
	});
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
	$('nav .year').on('click', function(e) {
		var currYear = $(e.currentTarget).find('span').html();
		var offset = $('[data-year="' + currYear + '"]').offset();
		s.animateTo(offset.top, {
			duration: 1250
		});
	});

});

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
		$('.droplet.second'),
		2,
		{
			"backgroundPosition": "0px 70px",
			"opacity": 0,
			"repeat": -1,
			"delay": 0.5
		}
	);
	var s = skrollr.init({
	    render: function(data) {
	        //Log the current scroll position.
	        console.log(data.curTop);
	    }
	});

});
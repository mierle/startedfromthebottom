
"use strict";

Zepto(function($){

	var height = $('body').height();
    var timeline = new TimelineMax({
    	// paused: true,
    	useFrames: true
    });

    // Icecream droplets

    timeline.add(
    	[
	    	TweenMax.to(
	    		$('.droplet.first'),
	    		100,
	    		{
	    			"backgroundPosition": "0px 70px",
	    			"opacity": 0,
	    			"repeat": -1
	    		}
	    	),
	    	TweenMax.to(
	    		$('.droplet.second'),
	    		200,
	    		{
	    			"backgroundPosition": "0px 70px",
	    			"opacity": 0,
	    			"repeat": -1,
	    			"delay": 50
	    		}
	    	)
	    ]
	);

    // $(window).on(
    // 	'scroll',
    // 	function(event) {
	   //  	var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
	   //  	timeline.progress(scrollTop / height);
	   //  	console.log(timeline.progress());
    // 	}
    // );

});
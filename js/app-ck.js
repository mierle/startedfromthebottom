"use strict";$(document).ready(function(){var e={},t="1986";TweenMax.to($(".droplet.first"),1.5,{backgroundPosition:"0px 70px",opacity:0,repeat:-1});TweenMax.to($(".zah"),3,{rotationY:"360deg",repeat:-1,ease:Linear.easeNone});$("[data-year]").each(function(t,n){var r=$(n).offset();e[r.top]=$(n).data("year")});var n=skrollr.init({render:function(n){for(var r in e){if(!(r<n.curTop+250))break;t=e[r]}$("nav .year").removeClass("active");$("nav .year."+t).addClass("active")}});$(".small").on("click",function(e){$(".big").toggleClass("active")});$("nav .year").on("click",function(e){$(".big").removeClass("active");var t=$(e.currentTarget).find("span").html(),r=$('[data-year="'+t+'"]').offset();n.animateTo(r.top,{duration:1250})});$(window).resize(function(){$("video").width($(window).width())});$("video").width($(window).width());var r=navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry)/g);r?$("video").html('<img src="http://therapup.net/wp-content/uploads/2013/04/Puff.gif">'):$("video").html('<video loop="1" muted autoplay="autoplay" poster="http://therapup.net/wp-content/uploads/2013/04/Puff.gif"><source src="video.webm" type="video/webm"> <source src="video.m4v"> <source src="video/dancing.mp4" type="video/mp4"></video>')});
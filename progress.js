jQuery(document).ready(function($) {

var progress = $(".progress-bar")	
var OPercent = $(".OPercent");
var TPercent = $(".TPercent");
var SPercent = $(".SPercent");
var bar = 50;
progress.width(bar+"%");

OPercent.click(function() {
	console.log(OPercent)
	bar = bar + 1;
	progress.width(bar+"%");
});



TPercent.click(function() {
	bar = bar + 3;
	progress.width(bar+"%");
});

SPercent.click(function() {
	bar = bar + 7;
	progress.width(bar+"%");
	});


});
/*window.onload = function() {
	if(window.jQuery) {
		alert("jQuery is loaded");
	} else {
		alert("jQuery failed to load");
	}
}*/
$(document).ready(function() {
	/*$('#process-panel').hide();
	$('#bubble-panel').hide();
	$('#international-panel').hide();*/
	$('.panel').hide();
	/*$('#process-button').click(function() {
		$('#process-panel').animate({width: 'toggle'});
		$(this).children('div').toggleClass('left-arrow right-arrow')
	});
	$('#bubble').click(function() {
		$('#bubble-panel').animate({width: 'toggle'});
	});
	$('#international1').click(function() {
		$('#international-panel').animate({width: 'toggle'});
	});
	$('#international2').click(function() {
		$('#international-panel').animate({width: 'toggle'});
	});*/
	$('button').click(function() {
		var $target = $($(this).attr('href'));
		$target.animate({width: 'toggle'});
		$(this).children('div').toggleClass('left-arrow right-arrow')
	});
});
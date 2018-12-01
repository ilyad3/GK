
$(document).ready(function(){
	$('.MapArrow').click(function() {
		if ($('.menu').is(':hidden')) {
			$('.menu').show('medium');
			$('.map').css({'height' : '2120'});
			$('.mapinfo').css({'bottom' : '537px'});
			$('.MapArrow').removeAttr('id');
			return;
		}
		if ($('.menu').is(':visible')) {
			$('.menu').hide('medium');
		  	$('.map').css({'height' : '2620'});
		  	$('.mapinfo').css({'bottom' : '878px'});
		  	$('.MapArrow').attr('id','MapArrowDown');
		  	return;
		}
	});
 	//timer=setTimeout(preload, 3000);
 
  function preload(){
  	$('.preload').slideToggle('medium');
  }
});


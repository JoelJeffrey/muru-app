$(document).ready(function($) {

	// Home Slider for users not signed in
	$('.home-slider').slick({
		dots: true,
		adaptiveHeight: true,
		prevArrow: '',
		nextArrow: ''
	});

	// Tourists Main page tour view functionality
	$('.tours-select').on('click', function(e) {
		e.preventDefault();
		e.stopPropagation();
		var $this = $(this);
		$('.tours-select').removeClass('active');
		$('.tours-list').removeClass('show');
		$('.tours-list').addClass('hidden');
		$this.addClass('active');
		if ($this.hasClass('tours-available')) {
			$('.available-tours').addClass('show')
		} else if ($this.hasClass('tours-requested')) {
			$('.requested-tours').addClass('show')
		} else {
			$('.confirmed-tours').addClass('show')
		}
	});

});
$(document).ready(function($) {
	
	$(function() {      
		$(".page").swipe( {
			//Generic swipe handler for all directions
			swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
				console.log("You swiped " + direction );  
			}
		});
	});

});
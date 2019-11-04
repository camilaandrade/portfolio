$(document).ready(function(){
	$('.menu').click(function(){
		$('#content').toggleClass('active');
	});
		('a').click(function(){
			$('#content').slideUp('slow');
		});
});


$(document).ready(function(){   
	

	$('#submit-save').on('click', function(event) {
		const $name = $('#name_input').val();
		const $house = $('.selected').text();
		const $info = $('#textarea').val();
		$.ajax({
			url: 'ajax.php',
			type: 'POST',
			data: {
				'username': $name,
				'clanselect': $house,
				'textinfo': $info,
			},
		})

		.done(function(data) {
			const respond = JSON.parse(data);
			$('.error').remove();
			if (respond['name'] !== $name) {
				$('#name_tip').before('<span class="error">' + respond['name'] + '<span>');
			} else {

			}
			if (respond['house'] === 'Select your house') {
				$('#house_select').after('<span class="error">' + respond['house'] + '<span>');
			}
			if (respond['textinfo'] !== '') {
				$('#about_self').after('<span class="error">' + respond['textinfo'] + '<span>');
			}
			console.log("success");
		})
		.fail(function() {
			console.log("error");
		})
		.always(function() {
			console.log("complete");
		});

		event.preventDefault();
		/* Act on the event */
	});
});
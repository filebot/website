Paddle.Setup({
	vendor: 32405
});


$(document).on('ready', function() {
	// display / hide app store links depending on the OS
	if (navigator.userAgent.indexOf('Windows') >= 0) {
		$(".winappstore").show()
	}
	else if (navigator.userAgent.indexOf('Macintosh') >= 0) {
		$(".macappstore").show()
	}

	// display random review
	$.ajax({
		url: 'reviews.json',
		dataType: 'json',
		success: function(data) {
			var review = data[Math.floor(Math.random() * data.length)]
			if (review.user.length > 0 && review.date.length > 0 && review.text.length > 0) {
				$('#review .user').text(review.user)
				$('#review .date').text(review.date)
				$('#review .text').text(review.text)
				$('#review').show()
			}
		}
	});
});

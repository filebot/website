Paddle.Setup({
	vendor: 32405
})


$(window).on('load', function() {
	$.ajax({
		url: 'reviews.json',
		dataType: 'json',
		success: function(data) {
			// display random review
			const id = Math.floor(Math.random() * data.length)
			const r = data[id]

			const a = $('#review')
			a > $('.user').text(r.user)
			a > $('.date').text(r.date)
			a > $('.text').text(r.text)
			a.attr('href', a.attr('href') + '#' + id)
			a.show()
		}
	})
})

Paddle.Setup({
	vendor: 32405
})


$(document).ready(function() {
	// display random review
	$.ajax({
		url: 'reviews.json',
		dataType: 'json',
		success: function(data) {
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

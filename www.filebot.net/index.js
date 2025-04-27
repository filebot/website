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

	if (navigator.userAgentData) {
		navigator.userAgentData.getHighEntropyValues(['architecture']).then(ua => {
			if (ua.platform == 'Windows') {
				$(ua.architecture == 'arm' ? 'a.windows-arm64' : 'a.windows-x64').addClass('highlight')
			}
			else if (ua.platform == 'macOS') {
				$(ua.architecture == 'arm' ? 'a.macos-arm64' : 'a.macos-x64').addClass('highlight')
			}
		});
	}
})

$(window).on('load', function() {
	const duration = 1000
	const fragment = window.location.hash

	const template = $('body').html()
	$('body').empty()

	$.ajax({
		url: 'reviews.json',
		dataType: 'json',
		success: function(data) {
			// populate body
			for (var i = 0; i < data.length; i++) {
				const r = data[i]
				const id = i
				// add review randomly sometime in the next few seconds
				setTimeout(function() {
					$('body').append(
						template
							.replace('{user}', r.user)
							.replace('{date}', r.date)
							.replace('{text}', r.text)
							.replace('{link}', r.link ? r.link : '#' + id)
							.replace('{id}',   id)
					)
				}, Math.floor(Math.random() * duration))
			}

			// scroll to fragment
			if (fragment) {
				setTimeout(function() {
					const r = $(fragment)[0]
					r.focus({preventScroll: true})
					r.scrollIntoView({behavior: 'smooth', block: 'center', inline: 'nearest'})
				}, duration)
			}
		}
	})
})

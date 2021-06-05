$(document).ready(function() {
	const template = $('body').html()
	$('body').empty()

	$.ajax({
		url: 'reviews.json',
		dataType: 'json',
		success: data => {
			data.forEach(r => {
				setTimeout(function() {
					$('body').append(
						template
							.replace('{user}', r.user)
							.replace('{date}', r.date)
							.replace('{text}', r.text)
							.replace('{link}', r.link ? r.link : 'javascript:void(0)')
					)
				}, Math.floor(Math.random() * 2000));
			})
		}
	});
});

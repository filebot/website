Paddle.Setup({
	vendor: 32405
});


$(window).on('load', function() {
	var deployment = null
	var email = null

	if (location.hash) {
		deployment = location.hash.substring(1)
		email = null
	}

	if (location.search) {
		var query = new URLSearchParams(location.search)
		deployment = query.get('deployment')
		email = query.get('email')
	}

	if (deployment) {
		Paddle.Checkout.open({
			product: 532439,
			allowQuantity: false,
			referring_domain: deployment,
			email: email
		});
	}
});

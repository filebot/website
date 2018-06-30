Paddle.Setup({
	vendor: 32405
});


$(window).on('load', function() {
	var deployment = location.hash.substring(1)

	if (deployment) {
		Paddle.Checkout.open({
			product: 532439,
			allowQuantity: false,
			referring_domain: deployment
		});
	}
});

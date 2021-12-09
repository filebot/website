Paddle.Setup({
	vendor: 32405,
	eventCallback: function(data) {
		console.log(data.event)
		console.log(data.eventData)
	}
});


$(document).ready(function() {
	var deployment = null
	var email = null
	var type = null

	if (location.hash) {
		deployment = location.hash.substring(1)
		email = null
	}

	if (location.search) {
		var query = new URLSearchParams(location.search)
		deployment = query.get('deployment')
		email = query.get('email')
		type = query.get('type')
	}

	if (deployment) {
		Paddle.Checkout.open({
			product: type == 'PX' ? 534413 : 532439,
			allowQuantity: false,
			referring_domain: deployment,
			email: email
		});
	}
});

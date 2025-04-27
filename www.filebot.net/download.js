$(window).on('load', function() {
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

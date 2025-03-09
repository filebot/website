
function getData() {
	var data = [{
		// Getting Started: Rename TV Series
		anchor: '#rename',
		video: 'https://www.youtube.com/watch?v=uD4WQN_vWcE&list=PLdPvEJhzxLMBBQrv9pmVumjzdGoEbQcH9',
		image: 'images/youtube/rename.webp',
		thumb: 'images/youtube/rename.thumb.webp',
		filter: true
	}, {
		// Screenshot: Mac App Store Permissions
		anchor: '#permissions',
		video: 'https://www.youtube.com/watch?v=RRq2_Pjyko8&list=PLdPvEJhzxLMCEJJpb1mJtVkOpS7FfALnd',
		image: 'images/permissions.webp',
		thumb: 'images/permissions.thumb.webp',
		filter: location.hash == '#mas'
	}, {
		// Tutorial: How do I organize files for Plex?
		anchor: '#plex-naming-standard',
		video: 'https://www.youtube.com/watch?v=cihWAvDW7MM&list=PLdPvEJhzxLMBBQrv9pmVumjzdGoEbQcH9',
		image: 'images/youtube/plex-naming-standard.webp',
		thumb: 'images/youtube/plex-naming-standard.thumb.webp',
		filter: true
	}, {
		// Tutorial: How do I manually fix episode matches?
		anchor: '#edit-match',
		video: 'https://www.youtube.com/watch?v=5T6_4tsOU5o&list=PLdPvEJhzxLMBBQrv9pmVumjzdGoEbQcH9',
		image: 'images/youtube/edit-match.webp',
		thumb: 'images/youtube/edit-match.thumb.webp',
		filter: true
	}, {
		// Tutorial: How do I manually match files with episodes in linear order?
		anchor: '#linear-matching',
		video: 'https://www.youtube.com/watch?v=dh2WXQSzgJA&list=PLdPvEJhzxLMBBQrv9pmVumjzdGoEbQcH9',
		image: 'images/youtube/linear-matching.webp',
		thumb: 'images/youtube/linear-matching.thumb.webp',
		filter: true
	}, {
		// Tutorial: How do I manually match multi-episode files in linear order?
		anchor: '#multi-episode-matching',
		video: 'https://www.youtube.com/watch?v=fCCal3KPCR8&list=PLdPvEJhzxLMBBQrv9pmVumjzdGoEbQcH9',
		image: 'images/youtube/multi-episode-matching.webp',
		thumb: 'images/youtube/multi-episode-matching.thumb.webp',
		filter: true
	}, {
		// Getting Started: Rename TV Series via Manual Matching
		anchor: '#manual-matching',
		video: 'https://www.youtube.com/watch?v=btNSv7AnMMw&list=PLdPvEJhzxLMCEJJpb1mJtVkOpS7FfALnd',
		image: 'images/episodes.webp',
		thumb: 'images/episodes.thumb.webp',
		filter: true
	}, {
		// Getting Started: Automatic Subtitle Lookup
		anchor: '#subtitle-lookup',
		video: 'https://www.youtube.com/watch?v=q-oZ_hovsTY&list=PLdPvEJhzxLMCEJJpb1mJtVkOpS7FfALnd',
		image: 'images/subtitle-hash-lookup.webp',
		thumb: 'images/subtitle-hash-lookup.thumb.webp',
		filter: location.hash != '#mas'
	}, {
		// Getting Started: Subtitle Search
		anchor: '#subtitle-search',
		video: 'https://www.youtube.com/watch?v=R80tKtHf4zw&list=PLdPvEJhzxLMCEJJpb1mJtVkOpS7FfALnd',
		image: 'images/subtitle-search.webp',
		thumb: 'images/subtitle-search.thumb.webp',
		filter: location.hash != '#mas'
	}, {
		// Getting Started: Check and create SFV files
		anchor: '#sfv',
		video: 'https://www.youtube.com/watch?v=4KWkSPr3fQY&list=PLdPvEJhzxLMCEJJpb1mJtVkOpS7FfALnd',
		image: 'images/sfv.webp',
		thumb: 'images/sfv.thumb.webp',
		filter: true
	}, {
		// Tutorial: How do I install my FileBot License File?
		anchor: '#select-license-file',
		video: 'https://www.youtube.com/watch?v=TnO8Pfn9Vlc&list=PLdPvEJhzxLMBBQrv9pmVumjzdGoEbQcH9',
		image: 'images/youtube/select-license-file.webp',
		thumb: 'images/youtube/select-license-file.thumb.webp',
		filter: location.hash != '#appx' && location.hash != '#mas'
	}, {
		// Tutorial: How do I restore match information from locally stored xattr metadata?
		anchor: '#xattr',
		video: 'https://www.youtube.com/watch?v=54h_Fb06drI&list=PLdPvEJhzxLMBBQrv9pmVumjzdGoEbQcH9',
		image: 'images/youtube/xattr.webp',
		thumb: 'images/youtube/xattr.thumb.webp',
		filter: true
	}, {
		// Tutorial: How do I undo rename operations?
		anchor: '#history',
		video: 'https://www.youtube.com/watch?v=YOhwvWrW4rs&list=PLdPvEJhzxLMBBQrv9pmVumjzdGoEbQcH9',
		image: 'images/youtube/history.webp',
		thumb: 'images/youtube/history.thumb.webp',
		filter: true
	}, {
		// Tutorial: How do I revert rename operations from the command-line?
		anchor: '#filebot-revert',
		video: 'https://www.youtube.com/watch?v=Yo02FD1mIUI&list=PLdPvEJhzxLMBBQrv9pmVumjzdGoEbQcH9',
		image: 'images/youtube/revert.webp',
		thumb: 'images/youtube/revert.thumb.webp',
		filter: location.hash != '#mas'
	}, {
		// Screenshot: Rename TV Series
		anchor: '#rename-screenshot',
		link: 'https://www.filebot.net/manual.html',
		image: 'images/rename.screenshot.webp',
		thumb: 'images/rename.screenshot.thumb.webp',
		filter: location.hash.length == 0
	}, {
		// Screenshot: Series Format
		anchor: '#format-screenshot',
		link: 'https://www.filebot.net/naming.html',
		image: 'images/format.screenshot.webp',
		thumb: 'images/format.screenshot.thumb.webp',
		filter: location.hash.length == 0
	}, {
		// Screenshot: Automatic Subtitle Lookup
		anchor: '#subtitle-lookup-screenshot',
		link: 'https://www.youtube.com/watch?v=q-oZ_hovsTY&list=PLdPvEJhzxLMCEJJpb1mJtVkOpS7FfALnd',
		image: 'images/subtitle-hash-lookup.screenshot.webp',
		thumb: 'images/subtitle-hash-lookup.screenshot.thumb.webp',
		filter: location.hash.length == 0
	}, {
		// Screenshot: Subtitle Search
		anchor: '#subtitle-search-screenshot',
		link: 'https://www.youtube.com/watch?v=R80tKtHf4zw&list=PLdPvEJhzxLMCEJJpb1mJtVkOpS7FfALnd',
		image: 'images/subtitle-search.screenshot.webp',
		thumb: 'images/subtitle-search.screenshot.thumb.webp',
		filter: location.hash.length == 0
	}, {
		// Screenshot: Check and create SFV files
		anchor: '#sfv-screenshot',
		link: 'https://www.youtube.com/watch?v=4KWkSPr3fQY&list=PLdPvEJhzxLMCEJJpb1mJtVkOpS7FfALnd',
		image: 'images/sfv.screenshot.webp',
		thumb: 'images/sfv.screenshot.thumb.webp',
		filter: location.hash.length == 0
	}, {
		// Screenshot: CLI
		anchor: '#filebot-rename',
		link: 'https://www.filebot.net/cli.html',
		image: 'images/cli.screenshot.webp',
		thumb: 'images/cli.screenshot.thumb.webp',
		filter: location.hash.length == 0
	}, {
		// Screenshot: FileBot Node
		anchor: '#filebot-node',
		link: 'https://www.filebot.net/node.html',
		image: 'images/node.screenshot.webp',
		thumb: 'images/node.screenshot.thumb.webp',
		filter: location.hash.length == 0
	}]

	data = data.filter(function(item) {
		return item.filter || location.hash == item.anchor
	})

	return data
}

function findPage(data, hash) {
	return data.findIndex(function(item) {
		return hash == item.anchor
	})
}

function runGalleria() {
	var data = getData()
	var page = findPage(data, location.hash)

	// open videos in a new tab when galleria is running within an iframe
	if (window.location !== window.parent.location) {
		data.forEach(function(item) {
			if (item.video) {
				item.link = item.video
				// must not be undefined for "open in new tab" to work
				item.video = '#'
			}
		})
	}

	Galleria.run('#galleria', {
		dataSource: data,
		show: page < 0 ? 0 : page,
		popupLinks: true,
		maxScaleRatio: 1,
		youtube: {
			vq: 'HD1080',
			// enable captions by default
			cc_lang_pref: 'en', cc_load_policy: 1,
			// enable autoplay
			autoplay: 1, mute: 1,
			// disable links to 3rd party videos
			rel: 0
		},
		thumbnails: 'lazy'
	})

	Galleria.ready(function() {
		this.bind("image", function(e) {
			if (this.doLazyLoadChunks !== false) {
				this.doLazyLoadChunks = false
				this.lazyLoadChunks(data.length)
			}
			location.hash = e.galleriaData.anchor
		})
		this.attachKeyboard({
			left: this.prev,
			right: this.next
		})
	})

	// enable back button
	$(window).on('hashchange', function() {
		var galleria = $('#galleria').data('galleria')
		var page = findPage(data, location.hash)
		if (page != galleria.getIndex() && page >= 0 && galleria._queue.length == 0) {
			galleria.show(page)	
		}
	})
}

function isFullScreen() {
	return (document.fullScreenElement && document.fullScreenElement !== null) || document.mozFullScreen || document.webkitIsFullScreen
}

function requestFullScreen(element) {
	if (element.requestFullscreen)
		element.requestFullscreen()
	else if (element.msRequestFullscreen)
		element.msRequestFullscreen()
	else if (element.mozRequestFullScreen)
		element.mozRequestFullScreen()
	else if (element.webkitRequestFullscreen)
		element.webkitRequestFullscreen()
}

function exitFullScreen() {
	if (document.exitFullscreen)
		document.exitFullscreen()
	else if (document.msExitFullscreen)
		document.msExitFullscreen()
	else if (document.mozCancelFullScreen)
		document.mozCancelFullScreen()
	else if (document.webkitExitFullscreen)
		document.webkitExitFullscreen()
}

function toggleFullScreen(element) {
	if (isFullScreen())
		exitFullScreen()
	else
		requestFullScreen(element || document.documentElement)
}



$(document).ready(function() {
	// init galleria
	runGalleria()
	// init fullscreen button
	$('#fullscreen').click(function() {
		toggleFullScreen()
	})
})


function getData() {
	var data = [{
		// Getting Started: Rename TV Series
		video: 'https://www.youtube.com/watch?v=RRq2_Pjyko8&list=PLdPvEJhzxLMCEJJpb1mJtVkOpS7FfALnd',
		image: 'images/rename.png',
		thumb: 'images/rename.thumb.png',
		filter: location.hash != '#snap' && location.hash != '#deb'
	}, {
		// Getting Started: Rename TV Series (Ubuntu)
		video: 'https://www.youtube.com/watch?v=sEFP3CsntNs&list=PLdPvEJhzxLMCEJJpb1mJtVkOpS7FfALnd',
		image: 'images/rename.png',
		thumb: 'images/rename.thumb.png',
		filter: location.hash == '#snap' || location.hash == '#deb'
	}, {
		// Screenshot: Mac App Store Permissions
		image: 'images/permissions.png',
		thumb: 'images/permissions.thumb.png',
		filter: location.hash == '#mas'
	}, {
		// Tutorial: How do I organize files for Plex?
		video: 'https://www.youtube.com/watch?v=cihWAvDW7MM&list=PLdPvEJhzxLMBBQrv9pmVumjzdGoEbQcH9',
		image: 'images/youtube/cihWAvDW7MM.jpg',
		thumb: 'images/youtube/cihWAvDW7MM.thumb.jpg',
		filter: true
	}, {
		// Getting Started: Rename TV Series via Manual Matching
		video: 'https://www.youtube.com/watch?v=btNSv7AnMMw&list=PLdPvEJhzxLMCEJJpb1mJtVkOpS7FfALnd',
		image: 'images/episodes.png',
		thumb: 'images/episodes.thumb.png',
		filter: true
	}, {
		// Tutorial: How do I manually match files with episodes in linear order?
		video: 'https://www.youtube.com/watch?v=dh2WXQSzgJA&list=PLdPvEJhzxLMBBQrv9pmVumjzdGoEbQcH9',
		image: 'images/youtube/dh2WXQSzgJA.jpg',
		thumb: 'images/youtube/dh2WXQSzgJA.thumb.jpg',
		filter: true
	}, {
		// Tutorial: How do I install my FileBot License File?
		video: 'https://www.youtube.com/watch?v=dh2WXQSzgJA&list=PLdPvEJhzxLMBBQrv9pmVumjzdGoEbQcH9',
		image: 'images/youtube/dh2WXQSzgJA.jpg',
		thumb: 'images/youtube/TnO8Pfn9Vlc.thumb.jpg',
		filter: location.hash != '#appx' && location.hash != '#mas'
	}, {
		// Tutorial: How do I restore match information from locally stored xattr metadata?
		video: 'https://www.youtube.com/watch?v=dh2WXQSzgJA&list=PLdPvEJhzxLMBBQrv9pmVumjzdGoEbQcH9',
		image: 'images/youtube/dh2WXQSzgJA.jpg',
		thumb: 'images/youtube/54h_Fb06drI.thumb.jpg',
		filter: true
	}, {
		// Tutorial: How do I undo rename operations?
		iframe: 'https://www.youtube.com/embed/YOhwvWrW4rs',
		video: 'https://www.youtube.com/watch?v=YOhwvWrW4rs&list=PLdPvEJhzxLMBBQrv9pmVumjzdGoEbQcH9',
		image: 'images/youtube/YOhwvWrW4rs.jpg',
		thumb: 'images/youtube/YOhwvWrW4rs.thumb.jpg',
		filter: true
	}, {
		// Tutorial: How do I revert rename operations from the command-line?
		video: 'https://www.youtube.com/watch?v=Yo02FD1mIUI&list=PLdPvEJhzxLMBBQrv9pmVumjzdGoEbQcH9',
		image: 'images/youtube/Yo02FD1mIUI.jpg',
		thumb: 'images/youtube/Yo02FD1mIUI.thumb.jpg',
		filter: location.hash != '#mas'
	}, {
		// Getting Started: Automatic Subtitle Lookup
		video: 'https://www.youtube.com/watch?v=q-oZ_hovsTY&list=PLdPvEJhzxLMCEJJpb1mJtVkOpS7FfALnd',
		image: 'images/subtitle-hash-lookup.png',
		thumb: 'images/subtitle-hash-lookup.thumb.png',
		filter: location.hash != '#mas'
	}, {
		// Getting Started: Subtitle Search
		video: 'https://www.youtube.com/watch?v=R80tKtHf4zw&list=PLdPvEJhzxLMCEJJpb1mJtVkOpS7FfALnd',
		image: 'images/subtitle-search.png',
		thumb: 'images/subtitle-search.thumb.png',
		filter: location.hash != '#mas'
	}, {
		// Getting Started: Check and create SFV files
		video: 'https://www.youtube.com/watch?v=4KWkSPr3fQY&list=PLdPvEJhzxLMCEJJpb1mJtVkOpS7FfALnd',
		image: 'images/sfv.png',
		thumb: 'images/sfv.thumb.png',
		filter: true
	}, {
		// Screenshot: Rename TV Series
		image: 'images/rename.screenshot.png',
		thumb: 'images/rename.screenshot.thumb.png',
		filter: location.hash.length == 0
	}, {
		// Screenshot: Series Format
		image: 'images/format.screenshot.png',
		thumb: 'images/format.screenshot.thumb.png',
		filter: location.hash.length == 0
	}, {
		// Screenshot: Automatic Subtitle Lookup
		image: 'images/subtitle-hash-lookup.screenshot.png',
		thumb: 'images/subtitle-hash-lookup.screenshot.thumb.png',
		filter: location.hash.length == 0
	}, {
		// Screenshot: Subtitle Search
		image: 'images/subtitle-search.screenshot.png',
		thumb: 'images/subtitle-search.screenshot.thumb.png',
		filter: location.hash.length == 0
	}, {
		// Screenshot: Check and create SFV files
		image: 'images/sfv.screenshot.png',
		thumb: 'images/sfv.screenshot.thumb.png',
		filter: location.hash.length == 0
	}, {
		// Screenshot: CLI
		image: 'images/cli.screenshot.png',
		thumb: 'images/cli.screenshot.thumb.png',
		filter: location.hash.length == 0
	}, {
		// Screenshot: FileBot Node
		image: 'images/node.screenshot.png',
		thumb: 'images/node.screenshot.thumb.png',
		filter: location.hash.length == 0
	}]

	data = data.filter(function(item) {
		return item.filter
	})

	return data
}

function runGalleria() {
	var data = getData()

	var anchor = location.hash.match(/^#([1-9])$/)
	var page = anchor ? parseInt(anchor[1]) - 1 : 0

	// open videos in a new tab when galleria is running within an iframe
	if (window.location !== window.parent.location) {
		data.forEach(function(item) {
			item.link = item.video
			// must not be undefined for "open in new tab" to work
			item.video = '#'
		})
	}

	Galleria.run('#galleria', {
		dataSource: data,
		show: page,
		popupLinks: true,
		maxScaleRatio: 1,
		youtube: {
			VQ: 'HD1080',
			autoplay: 1
		},
		thumbnails: 'lazy'
	})

	Galleria.ready(function() {
		this.bind("image", function(e) {
			if (this.doLazyLoadChunks !== false) {
				this.doLazyLoadChunks = false
				this.lazyLoadChunks(data.length)
			}
		})
		this.attachKeyboard({
			left: this.prev,
			right: this.next
		})
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

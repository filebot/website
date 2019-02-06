<?php
$version = isset($_GET['version']) ? $_GET['version'] : '@{application.version}';	// default version is hard-coded via deployment script
$type = $_GET['type'];

$root = 'https://get.filebot.net/filebot/';
$folder = $root.'FileBot_'.$version;
$file = '';

if (!isset($type) && isset($_SERVER['HTTP_USER_AGENT'])) {
	$ua = $_SERVER['HTTP_USER_AGENT'];

	header("Vary: User-Agent");
	error_log("[HTTP_USER_AGENT] ".$ua);

	if (preg_match('/Windows/i', $ua)) {
		$file = 'FileBot_'.$version.'_x64.msi';
	} else if (preg_match('/Macintosh/i', $ua)) {
		$file = 'FileBot_'.$version.'.pkg';
	} else if (preg_match('/(Debian|Ubuntu|Mint|Linux)/i', $ua)) {
		$file = 'FileBot_'.$version.'_universal.deb';
	} else if (preg_match('/X11/i', $ua)) {
		$file = 'FileBot_'.$version.'-portable.tar.xz';
	}
} else if ($type == 'msi') {
	$file = 'FileBot_'.$version.'_x64.msi';
} else if ($type == 'zip') {
	$file = 'FileBot_'.$version.'-portable.zip';
} else if ($type == 'pkg') {
	$file = 'FileBot_'.$version.'.pkg';
} else if ($type == 'app') {
	$file = 'FileBot_'.$version.'.app.tar.xz';
} else if ($type == 'deb') {
	$file = 'FileBot_'.$version.'_universal.deb';
} else if ($type == 'portable') {
	$file = 'FileBot_'.$version.'-portable.tar.xz';
} else if ($type == 'aur') {
	$file = 'FileBot_'.$version.'-aur.tar.xz';
} else if ($type == 'spk') {
	$file = 'FileBot_'.$version.'.spk';
} else if ($type == 'qpkg') {
	$file = 'FileBot_'.$version.'.qpkg';
}

header('HTTP/1.1 302 Found');
header('Location: '.$folder.'/'.$file);
?>

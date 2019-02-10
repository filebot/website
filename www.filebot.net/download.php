<?php
$version = isset($_GET['version']) ? $_GET['version'] : '@{application.version}';	// default version is hard-coded via deployment script
$type = $_GET['type'];


function redirect($url) {
	error_log("[REDIRECT] ".$url);
	header('Location: '.$url);
	exit;
}


$FRS = 'https://get.filebot.net/filebot/FileBot_'.$version.'/';


if (!isset($type)) {
	$ua = isset($_SERVER['HTTP_USER_AGENT']) ? $_SERVER['HTTP_USER_AGENT'] : '';

	header("Vary: User-Agent");
	error_log("[HTTP_USER_AGENT] ".$ua);

	if (preg_match('/Windows/i', $ua)) {
		redirect($FRS.'FileBot_'.$version.'_x64.msi');
	} else if (preg_match('/Macintosh/i', $ua)) {
		redirect($FRS.'FileBot_'.$version.'.pkg');
	} else {
		redirect('https://www.filebot.net/download.html');
	}
} else if ($type == 'msi') {
	redirect($FRS.'FileBot_'.$version.'_x64.msi');
} else if ($type == 'zip') {
	redirect($FRS.'FileBot_'.$version.'-portable.zip');
} else if ($type == 'pkg') {
	redirect($FRS.'FileBot_'.$version.'.pkg');
} else if ($type == 'app') {
	redirect($FRS.'FileBot_'.$version.'.app.tar.xz');
} else if ($type == 'deb') {
	redirect($FRS.'FileBot_'.$version.'_universal.deb');
} else if ($type == 'portable') {
	redirect($FRS.'FileBot_'.$version.'-portable.tar.xz');
} else if ($type == 'aur') {
	redirect($FRS.'FileBot_'.$version.'-aur.tar.xz');
} else if ($type == 'spk') {
	redirect($FRS.'FileBot_'.$version.'.spk');
} else if ($type == 'qpkg') {
	redirect($FRS.'FileBot_'.$version.'.qpkg');
} else {
	redirect($FRS);
}

?>

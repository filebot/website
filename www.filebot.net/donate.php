<?php
$type = isset($_GET['src']) ? $_GET['src'] : 'undefined';

// redirect to purchase page
$url = 'https://www.filebot.net/purchase.html#'.urlencode('upgrade-'.strtolower($type));

header('HTTP/1.1 302 Found');
header('Location: '.$url);
?>

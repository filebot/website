<!DOCTYPE html>
<html lang="en">
<head>
	<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
	<meta name="viewport" content="width=device-width">

	<title>FileBot Reviews</title>
	<link rel="icon" href="favicon.webp" sizes="16x16 32x32" type="image/webp">
	<link rel="icon" href="favicon.svg" sizes="48x48 192x192" type="image/svg+xml">
	<link rel="stylesheet" href="base.css" type="text/css">
	<link rel="stylesheet" href="base.dark.css" type="text/css" media="(prefers-color-scheme: dark)">
	<link rel="stylesheet" href="review.css" type="text/css">

	<link rel="preload" href="fonts/handwriting.woff2" as="font" type="font/woff2" crossorigin>

	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
	<script src="reviews.js"></script>

	<style>
		div.review {
			float: left;
		}
	</style>
</head>
<body>
<?
// read file
$filename = "reviews.json";
$handle = fopen($filename, "r");
$contents = fread($handle, filesize($filename));
fclose($handle);

// parse Json
$reviews = json_decode($contents);
shuffle($reviews);

foreach ($reviews as $id => $review) {
?>
<div class="review light">
	<a class="box" href="<? echo '#'.$id ?>" id="<? echo $id ?>">
		<div class="thumbs up">
			<img alt="Like" src="images/thumbs.svg" width="26" height="26" />
		</div>
		<div>
			<p class="head">Posted by <span class="user"><? echo $review->user ?></span> on <span class="date"><? echo $review->date ?></span></p>
			<p class="text"><? echo $review->text ?></p>
		</div>
	</a>
</div>
<?
}
?>
</body>
</html>

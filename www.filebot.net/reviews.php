<!DOCTYPE html>
<html>
	<head>
		<meta http-equiv="content-type" content="text/html; charset=UTF-8" />

		<title>FileBot Reviews</title>
		<link rel="icon" href="favicon.png" sizes="16x16 32x32" type="image/png">
		<link rel="stylesheet" href="base.css" type="text/css">
		<link rel="stylesheet" href="base.dark.css" type="text/css" media="(prefers-color-scheme: dark)">
		<link rel="stylesheet" href="review.css" type="text/css">
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

		foreach ($reviews as $review) {
			?>
			<div class="review message box" style="float:left">
				<div class="thumbs up">
					<img src="images/thumbs_up.png" />
				</div>
				<div>
					<p class="head">Posted by <span class="user"><? echo $review->user ?></span> on <span class="date"><? echo $review->date ?></span></p>
					<p class="text quote"><? echo $review->text ?></p>
				</div>
			</div>
			<?
		}
		?>
	</body>
</html>

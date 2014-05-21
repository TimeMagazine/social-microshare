social-buttons
==============

Customizable social media buttons for microsharing 

After installing this repo as a Node module:

	var social = require("social-buttons");

	var fb = social.facebook(53177223193); // TIME's FB id app, easily found in source code
	var tw = social.twitter();

	// make buttons
	fb.makeButton("#my_container", "fbButtonId");
	tw.makeButton("#my_container", "twButtonId");

	// custom share

	$("#fbButtonId").click(function() {
		fb.share({
			message: "I got 'Lothar' on this @TIME quiz!",
			description: "See which member of the Time Interactive Team You Are.",
			link: "http://time.com/quiz"
		});
	});

	$("#twButtonId").click(function() {
		tw.share({
			message: "I got 'Lothar' on this @TIME quiz!",
			link: "http://time.com/quiz"
		});
	});
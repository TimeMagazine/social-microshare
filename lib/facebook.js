// FACEBOOK SHARE
/*
app_id: required
title: required
image: required
description: optional
link: defaults to page URL
*/

;(function() {
	module.exports = function(opts) {
		// load the SDK, unless you already did
		// https://developers.facebook.com/docs/javascript/quickstart
		window.fbAsyncInit = function() {
			FB.init({
				appId: opts.app_id,
				autoLogAppEvents : true,
				xfbml: true,
				version: 'v9.0'
			});
		};

		(function(d, s, id){
			var js, fjs = d.getElementsByTagName(s)[0];
			if (d.getElementById(id)) {return;}
			js = d.createElement(s); js.id = id;
			js.src = "//connect.facebook.net/en_US/sdk.js";
			fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script', 'facebook-jssdk'));

		var share = function() {
			var obj = {
				method: "share",
				href: opts.link || document.URL
			};

			if (opts.hashtag) {
				obj.hashtag;
			}

			obj.quote = opts.title;

			console.log("FB Obj");

			FB.ui(obj, function(response) {
				// console.log(response);
			});
		}

        return share;
	}
}());

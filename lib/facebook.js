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
				xfbml: true,
				version: 'v2.8'
			});
		};

		(function(d, s, id){
			var js, fjs = d.getElementsByTagName(s)[0];
			if (d.getElementById(id)) {return;}
			js = d.createElement(s); js.id = id;
			js.src = "//connect.facebook.net/en_US/sdk.js";
			fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script', 'facebook-jssdk'));

        //https://developers.facebook.com/docs/sharing/reference/feed-dialog
        // This will be deprecated on July 17, 2017
		var share = function() {
			var obj = {
				app_id: opts.app_id,
				method: "share",
				display: "popup",
				href: opts.link || document.URL
			};

			if (opts.hashtag) {
				obj.hashtag;
			}

			obj.quote = opts.title;

			FB.ui(obj, function(response) {
				// console.log(response);
			});
		}

        return share;
	}
}());

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
				method: "feed",
				display: "popup",
				link: opts.link || document.URL
			};

			if (!opts.title || !opts.image) {
				console.log("The facebook share module requires an app_id, title and image");
				return;
			}

			obj.caption = opts.title;
			obj.picture = opts.image;
			obj.description = opts.description;
			delete obj.image;
			delete obj.title;

			FB.ui(obj, function(response) {
				// console.log(response);
			});
		}

        return share;
	}
}());

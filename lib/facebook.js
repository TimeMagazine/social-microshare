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

		let share;

		if (opts.shareURL) {

			share = function() {
		    	window.open(opts.shareURL);
		    };

		    return share;
		};

		console.log("Loading FB SDK");

		window.fbAsyncInit = function() {
			FB.init({
				appId: opts.app_id,
				autoLogAppEvents : true,
				xfbml: true,
				version: 'v10.0'
			});
		};

		(function(d, s, id) {
			var js, fjs = d.getElementsByTagName(s)[0];
			if (d.getElementById(id)) return;
			js = d.createElement(s); js.id = id;
			js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0";
			fjs.parentNode.insertBefore(js, fjs);
			}(document, 'script', 'facebook-jssdk')
		);

		share = function() {
			let obj = {
				method: "share",
				href: opts.link || document.URL
			};

			if (opts.hashtag) {
				obj.hashtag;
			}

			obj.quote = opts.title;

			FB.ui(obj, function(response) {
				console.log(response);
			});
		}

		// let URL = `https://www.facebook.com/dialog/share?` +
		// 	`app_id=${ opts.app_id }&display=popup` +
		// 	`&href=${ opts.link || document.url }`
		// 	//  &redirect_uri=https%3A%2F%2Fdevelopers.facebook.com%2Ftools%2Fexplorer

		// console.log(URL);

        return share;
	}
}());

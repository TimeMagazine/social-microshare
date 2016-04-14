/* Twitter allows sharing through simple URLs, so it's not usually necessary to load the SDK by calling init() */

;(function($) {

	module.exports = function(app_id, callback) {
		var that = {
			app_id: app_id
		};

		// load the SDK
		window.fbAsyncInit = function() {
			$(document.body).append('<div id="fb-root"></div>');
		    FB.init({
				appId      : app_id,
				xfbml      : true,
				version    : 'v2.2'
		    });

		    if (callback) {
		    	callback();
		    }
		  };

		(function(d, s, id){
			var js, fjs = d.getElementsByTagName(s)[0];
			if (d.getElementById(id)) {return;}
			js = d.createElement(s); js.id = id;
			//js.src = "//connect.facebook.net/en_US/sdk.js";
			js.src = "https://connect.facebook.net/en_US/all/debug.js";
			fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script', 'facebook-jssdk'));

		return {
			share: function(opts) {
				var obj = {
					app_id: that.app_id,
					method: "feed",
					display: "popup",
					link: opts.link || document.URL				
				}

				if (!opts.title || !opts.image) {
					console.log("The facebook share module requires a title and image");
					return;
				}

				obj.name = opts.title;
				obj.picture = opts.image;
				delete obj.image;
				delete obj.title;

				FB.ui(obj, function(response){
					//console.log(response);
				});	
			}
		}
	}
}(window.jQuery));
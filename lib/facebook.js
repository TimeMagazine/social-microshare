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
				version    : 'v2.0'
		    });

		    if (callback) {
		    	callback();
		    }
		  };

		(function(d, s, id){
			var js, fjs = d.getElementsByTagName(s)[0];
			if (d.getElementById(id)) {return;}
			js = d.createElement(s); js.id = id;
			js.src = "//connect.facebook.net/en_US/sdk.js";
			//js.src = "https://connect.facebook.net/en_US/all/debug.js";
			fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script', 'facebook-jssdk'));

		return {
			makeButton: function(parent, id) {
				$("<img />", {
					id: id || "ti_fbButton",
					src: "http://img.timeinc.net/time/wp/interactives/apps/school_fights/img/facebook_gray.png"
				}).addClass("social_button").appendTo(parent);
			},
			share: function(opts) {
				var obj = {
					app_id: that.app_id,
					method: "feed",
					display: "popup",
					link: opts.url || opts.link || document.URL				
				}

				if (opts.message) {
					obj.name = opts.message;
				}

				if (opts.picture) {
					obj.picture = opts.picture;
				}

				if (opts.description) {
					obj.description = opts.description;
				}

				FB.ui(obj, function(response){
					//console.log(response);
				});	
			}
		}
	}
}(window.jQuery));
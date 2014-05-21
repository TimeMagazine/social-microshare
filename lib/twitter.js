/* Twitter allows sharing through simple URLs, so it's not usually necessary to load the SDK by calling init() */
module.exports = function() {
	return {
		init: function() {
			window.twttr = (function (d,s,id) {
				var t, js, fjs = d.getElementsByTagName(s)[0];
				if (d.getElementById(id)) return; js=d.createElement(s); js.id=id;
				js.src="https://platform.twitter.com/widgets.js"; fjs.parentNode.insertBefore(js, fjs);
				return window.twttr || (t = { _e: [], ready: function(f){ t._e.push(f) } });
			}(document, "script", "twitter-wjs"));
		},
		makeButton: function(parent, id) {
			$("<img />", {
				id: id || "ti_twButton",
				src: "http://img.timeinc.net/time/wp/interactives/apps/school_fights/img/tweet_gray.png"
			}).addClass("social_button").appendTo(parent);
		},
		share: function(opts) {
			opts.link = opts.link || document.location.href;
			opts.link = encodeURIComponent(opts.link);

	    	window.open("https://twitter.com/intent/tweet?text=" + opts.message + "&url=" + opts.link);
		}
	};
}
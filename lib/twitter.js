;(function($) {

	/* Twitter allows sharing through simple URLs, so it's not usually necessary to load the SDK by calling init() */
	module.exports = function() {
		return {
			// depending on the rest of the page, this may have already been executed
			init: function() {
				window.twttr = (function (d,s,id) {
					var t, js, fjs = d.getElementsByTagName(s)[0];
					if (d.getElementById(id)) return; js=d.createElement(s); js.id=id;
					js.src="https://platform.twitter.com/widgets.js"; fjs.parentNode.insertBefore(js, fjs);
					return window.twttr || (t = { _e: [], ready: function(f){ t._e.push(f) } });
				}(document, "script", "twitter-wjs"));
			},
			share: function(opts) {
				opts.link = opts.link || document.location.href;
				opts.link = encodeURIComponent(opts.link);
		    	window.open("https://twitter.com/intent/tweet?text=" + encodeURIComponent(opts.message) + "&url=" + opts.link);
			}
		};
	}
}(window.jQuery));
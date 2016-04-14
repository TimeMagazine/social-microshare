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
				if (!opts.text) {
					console.log("The Twitter share button requires a 'text' parameter.");
					return;
				}
				opts.link = encodeURIComponent(opts.link || document.URL);
		    	window.open("https://twitter.com/intent/tweet?text=" + encodeURIComponent(opts.text) + "&url=" + opts.link);
			}
		};
	}
}(window.jQuery));
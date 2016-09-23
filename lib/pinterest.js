;(function($) {

	/* Twitter allows sharing through simple URLs, so it's not usually necessary to load the SDK by calling init() */
	module.exports = function() {
		return {
			share: function(opts) {
				if (!opts.image || !opts.title) {					
					console.log("The Pinterest Share button requires 'title' and 'image' parameters.");
					return;
				}

				opts.link = encodeURIComponent(opts.link || document.URL);
		    	window.open("http://pinterest.com/pin/create/button/?media=" + encodeURIComponent(opts.image) + "&description=" + encodeURIComponent(opts.title) + "&url=" + opts.link);
			}
		};
	}
}(window.jQuery));
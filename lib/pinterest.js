;(function($) {

	/* Twitter allows sharing through simple URLs, so it's not usually necessary to load the SDK by calling init() */
	module.exports = function() {
		return {
			share: function(opts) {
				//opts.image = encodeURIComponent(opts.image);
				opts.description = encodeURIComponent(opts.description);
				opts.link = encodeURIComponent(opts.link);
		    	window.open("http://pinterest.com/pin/create/button/?media=" + encodeURIComponent(opts.image) + "&description=" + opts.description + "&url=" + opts.link);
			}
		};
	}
}(window.jQuery));
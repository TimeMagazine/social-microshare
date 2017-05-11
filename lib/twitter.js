/* Twitter allows sharing through simple URLs, so it's not usually necessary to load the SDK by calling init() */

;(function() {
	module.exports = function(opts) {
		var share = function() {
			if (!opts.title) {
				console.log("The Twitter share button requires a 'title' parameter.");
				return;
			}
			opts.url = encodeURI(opts.link || document.URL);
			console.log(opts.url);
	    	window.open("https://twitter.com/intent/tweet?text=" + encodeURIComponent(opts.title) + "&url=" + opts.url);
		};
		return share;
	}
}());
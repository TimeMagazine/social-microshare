;(function() {
	module.exports = function(opts) {
		var share = function() {
			if (!opts.title) {
				console.log("The Reddit share button requires a 'title'");
				return;
			}

			opts.link = encodeURIComponent(opts.link || document.URL);
			var url = "https://www.reddit.com/submit?title=" + encodeURIComponent(opts.title) + "&url=" + opts.link;
			window.open(url);
		}
		return share;		
	};
}());
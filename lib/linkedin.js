;(function() {
	module.exports = function(opts) {
		var share = function() {
			if (!opts.title || !opts.description) {
				console.log("The LinkedIn share button requires a 'title' and 'description' field.");
				return;
			}

			opts.link = encodeURIComponent(opts.link || document.URL);
			opts.source = encodeURIComponent(location.protocol + "//" + location.hostname);
			opts.description = opts.description || "";

			var url = "http://www.linkedin.com/shareArticle?mini=true&url=" + opts.link + "&title=" + encodeURIComponent(opts.title) + "&summary=" + encodeURIComponent(opts.description) + "&source=" + opts.source;
			window.open(url);
		}
		return share;		
	};
}());
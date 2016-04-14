;(function() {
	module.exports = function(callback) {
		return {
			share: function(opts) {
				if (!opts.title || !opts.description) {
					console.log("The LinkedIn share button requires a 'title' and 'summary' field.");
					return;
				}

				opts.link = encodeURIComponent(opts.link || document.URL);
				opts.source = encodeURIComponent(location.protocol + "//" + location.hostname);
				opts.summary = opts.description || "";

				var url = "http://www.linkedin.com/shareArticle?mini=true&url=" + opts.link + "&title=" + encodeURIComponent(opts.title) + "&summary=" + encodeURIComponent(opts.summary) + "&source=" + opts.source;
				window.open(url);
			}
		}
	};

}());
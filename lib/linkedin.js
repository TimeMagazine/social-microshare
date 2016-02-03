;(function() {
	module.exports = function(callback) {
		return {
			share: function(opts) {
				opts.link = opts.link || document.location.href;
				opts.link = encodeURIComponent(opts.link);

				opts.title = opts.title || "";
				opts.summary = opts.summary || "";

				var url = "http://www.linkedin.com/shareArticle?mini=true&url=" + opts.link + "&title=" + encodeURIComponent(opts.title) + "&summary=" + opts.summary + "&source=http://motto.time.com";
				window.open(url);
			}
		}
	};

}());
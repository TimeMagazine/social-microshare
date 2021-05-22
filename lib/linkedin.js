;(function() {
	module.exports = function(opts) {
		let url;

		if (opts.shareURL) {
			url = opts.shareURL;
		} else {
			opts.link = encodeURIComponent(opts.link || document.URL);
			url = `https://www.linkedin.com/sharing/share-offsite/?url=${ opts.link }`;
		}

		console.log("LINKEDIN URL")
		console.log(url);

		var share = function() {
			window.open(url);
		}
		return share;		
	};
}());
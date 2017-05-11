;(function() {
	module.exports = function(opts) {
		var share = function() {
			if (!opts.image || !opts.title) {					
				console.log("The Pinterest Share button requires 'title' and 'image' parameters.");
				return;
			}

			opts.link = encodeURIComponent(opts.link || document.URL);
	    	window.open("http://pinterest.com/pin/create/button/?media=" + encodeURIComponent(opts.image) + "&description=" + encodeURIComponent(opts.title) + "&url=" + opts.link);
		}
		return share;
	}
}());
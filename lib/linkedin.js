;(function() {
	module.exports = function(callback) {
		/*
		window.linkedInLoad = function() {
	    	console.log("Logged into linkedIn");
		}

		var js = document.createElement("script");
		js.src = "//platform.linkedin.com/in.js";
		js.innerHTML = 
		    "api_key: 77o4yyf6kr475f\n" + 
		    "onLoad: linkedInLoad\n" +
		    "authorize: true\n" + 
		    "lang: en_US"
        document.getElementsByTagName("head")[0].appendChild(js);
		*/

		return {
			share: function(opts) {
				opts.link = opts.link || document.location.href;
				opts.link = encodeURIComponent(opts.link);

				opts.title = opts.title || "";
				opts.summary = opts.summary || "";

				var url = "http://www.linkedin.com/shareArticle?mini=true&url=" + opts.link + "&title=" + encodeURIComponent(opts.title) + "&summary=" + opts.summary + "&source=http://motto.time.com";

				console.log(url);

				window.open(url);
			}
		}
	};

}());
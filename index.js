module.exports = function(container_selector, services, grayscale) {
	require("./styles.less");

	var templates = {
		twitter: require("./svgs/twitter.html"),
		facebook: require("./svgs/facebook.html"),
		linkedin: require("./svgs/linkedin.html"),
		pinterest: require("./svgs/pinterest.html"),
		reddit: require("./svgs/reddit.html")
	};

	var methods = {
		twitter: require("./lib/twitter"),
		facebook: require("./lib/facebook"),
		linkedin: require("./lib/linkedin"),
		pinterest: require("./lib/pinterest"),
		reddit: require("./lib/reddit")
	};

	var share = {};	

	var parent = document.querySelector(container_selector);

	var div = document.createElement("div");
	div.className = "social_microshare";
	parent.appendChild(div);

	services.forEach(service => {
		service = service.toLowerCase();
		if (!templates[service]) {
			console.log("Couldn't find icon for", service + ". Options are", Object.keys(templates).join(","));
			return;
		}
		var el = document.createElement("div");
		el.innerHTML = templates[service]();
		el.className = "social_icon " + service;
		if (grayscale) {
			el.className += " gray";
		}
		div.appendChild(el);
		el.onclick = function() {
			if (!share[service]) {
				console.log("You need to define the share options for", service);
				return;
			}
			share[service]();
		}
	});

	return {
		twitter: function(opts) {
			share.twitter = methods.twitter(opts);
		},
		facebook: function(opts) {
			share.facebook = methods.facebook(opts);
		},
		linkedin: function(opts) {
			share.linkedin = methods.linkedin(opts);
		},
		pinterest: function(opts) {
			share.pinterest = methods.pinterest(opts);
		},
		reddit: function(opts) {
			share.reddit = methods.reddit(opts);
		},
		all: function(opts) {
			share.facebook = methods.facebook(opts);
			share.linkedin = methods.linkedin(opts);
			share.pinterest = methods.pinterest(opts);
			share.twitter = methods.twitter(opts);
			share.reddit = methods.reddit(opts);
		},
		share: share
	};
}
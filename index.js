let microshare = function(container_selector, services, opts) {
	require("./styles.scss");

	opts = opts || {};

	let templates = {
		twitter: require("./svgs/twitter.html"),
		facebook: require("./svgs/facebook.html"),
		linkedin: require("./svgs/linkedin.html"),
		pinterest: require("./svgs/pinterest.html"),
		reddit: require("./svgs/reddit.html")
	};

	let methods = {
		twitter: require("./lib/twitter"),
		facebook: require("./lib/facebook"),
		linkedin: require("./lib/linkedin"),
		pinterest: require("./lib/pinterest"),
		reddit: require("./lib/reddit")
	};

	let share = {};
	let parent;

	if (typeof container_selector == "object") {
		parent = container_selector;
	} else {
		parent = document.querySelector(container_selector);
	}

	let div = document.createElement("div");
	div.className = "social_microshare";
	parent.appendChild(div);

	services.forEach(service => {
		service = service.toLowerCase();
		if (!templates[service]) {
			console.log("Couldn't find icon for", service + ". Options are", Object.keys(templates).join(","));
			return;
		}

		let el; // icon

		if (opts.images && opts.images[service]) {
			if (typeof opts.images[service] === "string") {
				el = document.querySelector(opts.images[service]);
			} else {
				el = opts.images[service];
			}
		} else {
			el = document.createElement("div");
			el.innerHTML = templates[service]();
			el.className = "social_icon " + service;

			if (opts.background && opts.background === "gray") {
				el.className += " gray";
			}

			if (opts.background && opts.background === "none" || opts.background && opts.background === "transparent") {
				el.className += " transparent";
			}
			div.appendChild(el);
		}
		
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

export { microshare }
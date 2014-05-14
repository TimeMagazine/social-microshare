module.exports.shortenURL = function(access_token, long_url, callback) {
    jQuery.getJSON(
        "https://api-ssl.bitly.com/v3/shorten?callback=?", { 
            "access_token": access_token,
            "longUrl": long_url
        },
        function(response) {
            if (response && response.data && response.data.url) {
                // do something with response
                var short_url = response.data.url;
                callback(short_url);
            } else {
            	console.log("Error shortening URL");
            }
        }
	);
}
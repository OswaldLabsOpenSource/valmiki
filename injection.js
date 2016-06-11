chrome.storage.sync.get({
	serviceStatus: ""
}, function(items) {
	if (items.serviceStatus== "start") {
		if (document.querySelectorAll("#oswaldSheet").length <= 0) {
			var externalSheet = document.createElement("link");
			externalSheet.setAttribute("href", "//getoswald.xyz/style1.css");
			externalSheet.setAttribute("rel", "stylesheet");
			externalSheet.setAttribute("type", "text/css");
			externalSheet.setAttribute("id", "oswaldSheet");
			document.querySelector("head").appendChild(externalSheet);
		}
	}
});
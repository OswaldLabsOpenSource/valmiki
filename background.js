var startService = function() {
	chrome.storage.sync.get({
		serviceStatus: ""
	}, function(items) {
		if (items.serviceStatus== "start") {
			chrome.tabs.executeScript(null, {file: "injection.js"});
		} else {
			chrome.tabs.executeScript(null, {file: "rejection.js"});
		}
	});
}

window.addEventListener("storage", startService, false);
document.addEventListener("DOMContentLoaded", startService, false);
chrome.tabs.onActivated.addListener(function() {
	startService();
});

chrome.storage.sync.get({
	serviceStatus: ""
}, function(items) {
	if (items.serviceStatus == "start") {
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
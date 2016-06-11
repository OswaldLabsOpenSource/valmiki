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
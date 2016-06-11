var $ = function(elt) {
	return document.querySelector(elt);
}
var _ = function(elt, command, fn) {
	return elt.addEventListener(command, fn);
}

var Oswald = function() {
	if (localStorage.getItem("serviceStatus") == "start") {
		Oswald.startService();
	} else {
		Oswald.stopService();
	}
}
Oswald.startService = function() {
	localStorage.setItem("serviceStatus", "start");
	$(".disabled").style.display = "none";
	$(".enabled").style.display = "block";
	$("body").classList.add("on");
	chrome.browserAction.setIcon({path:" icon.png"});
	chrome.storage.sync.set({
		serviceStatus: "start"
	});
}
Oswald.stopService = function() {
	localStorage.setItem("serviceStatus", "stop");
	$(".disabled").style.display = "block";
	$(".enabled").style.display = "none";
	$("body").classList.remove("on");
	chrome.browserAction.setIcon({path:" icon-disabled.png"});
	chrome.storage.sync.set({
		serviceStatus: "stop"
	});
}

_($("#enableOswald"), "click", function() {
	Oswald.startService();
});
_($("#disableOswald"), "click", function() {
	Oswald.stopService();
});
_($("#readingMode"), "click", function() {
	chrome.tabs.query({
		"active": true,
		"windowId": chrome.windows.WINDOW_ID_CURRENT
	}, function (tabs) {
		if (tabs[0].url.indexOf("http://oswald.ga/api.php") == -1) {
			chrome.tabs.create({
				url: "http://oswald.ga/api.php?url=" + tabs[0].url
			});
		}
	});
});
_(document, "DOMContentLoaded", function() {
	Oswald();
});
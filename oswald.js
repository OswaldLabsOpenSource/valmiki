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
}
Oswald.stopService = function() {
	localStorage.setItem("serviceStatus", "stop");
	$(".disabled").style.display = "block";
	$(".enabled").style.display = "none";
	$("body").classList.remove("on");
}

_($("#enableOswald"), "click", function() {
	Oswald.startService();
});
_($("#disableOswald"), "click", function() {
	Oswald.stopService();
});

_(document, "DOMContentLoaded", function() {
	Oswald();
});
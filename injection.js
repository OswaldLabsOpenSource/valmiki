var startService = function() {
	if (localStorage.getItem("serviceStatus") == "start") {
		document.body.style.background = "red";
	} else {
		//document.body.style.background = "";
	}
}

window.addEventListener("storage", startService, false);
document.addEventListener("DOMContentLoaded", startService, false);
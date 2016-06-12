if (document.querySelectorAll("#oswaldSheet").length > 0) {
	var externalSheet = document.querySelector("#oswaldSheet");
	document.querySelector("head").removeChild(externalSheet);
}
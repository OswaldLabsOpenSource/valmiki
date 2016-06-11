var $ = function(elt) {
	return document.querySelector(elt);
}
var _ = function(elt, command, fn) {
	return elt.addEventListener(command, fn);
}

var externalSheet = document.createElement("link");
externalSheet.setAttribute("href", "//getoswald.xyz/style1.css");
externalSheet.setAttribute("rel", "stylesheet");
externalSheet.setAttribute("type", "text/css");
document.querySelector("head").appendChild(externalSheet);
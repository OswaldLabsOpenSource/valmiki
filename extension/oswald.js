var $ = function(elt) {
	return document.querySelector(elt);
}
var _ = function(elt, command, fn) {
	return elt.addEventListener(command, fn);
}

_($("#enableOswald"), "click", function() {
	alert("X");
});
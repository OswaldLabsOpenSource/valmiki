var $ = function(elt) {
	return document.querySelector(elt);
}
var _ = function(elt, command, fn) {
	return elt.addEventListener(command, fn);
}
var dis = document.querySelectorAll(".style-1 input[type='radio']");
for (i = 0; i < dis.length; i++) {
	_(dis[i], "change", function() {
		var values;
		if (this.id == "learningDisability") {
			values = [18, 2, 4];
			$("#BlackonYellow").checked = true;
		} else if (this.id == "eyeDefect") {
			values = [20, 0, 0];
			$("#BlackonWhite").checked = true;
		} else {
			values = [16, 0, 0];
			$("#BlackonWhite").checked = true;
		}
		for (j = 0; j < document.querySelectorAll("input[type='range']").length; j++) {
			document.querySelectorAll("input[type='range']")[j].value = values[j];
		}
	});
}

window.addEventListener("scroll", function() {
	document.getElementById("thisRow").style.webkitTransform = "translateY(" + window.pageYOffset + "px)";
});

var info_color = $(".preview").style.color;
var info_background = $(".preview").style.background;
var info_fontSize = $(".preview").style.fontSize;
var info_letterSpacing = $(".preview").style.letterSpacing;
var info_wordSpacing = $(".preview").style.wordSpacing;


var allInputs = document.querySelectorAll("input");
for (i = 0; i < allInputs.length; i++) {
	_(allInputs[i], "change", function() {

		if ($(".style-2 input[type='radio']:checked").id == "BlackonWhite") {
			$(".preview").style.color = "#000"; info_color = "#000";
			$(".preview").style.background = "#fff"; info_background = "#fff";
		} else if ($(".style-2 input[type='radio']:checked").id == "BlackonYellow") {
			$(".preview").style.color = "#000"; info_color = "#000";
			$(".preview").style.background = "#ff0"; info_background = "#ff0";
		} else if ($(".style-2 input[type='radio']:checked").id == "BlackonCreme") {
			$(".preview").style.color = "#000"; info_color = "#000";
			$(".preview").style.background = "#fafac8"; info_background = "#fafac8";
		} else if ($(".style-2 input[type='radio']:checked").id == "OffblackonOffwhite") {
			$(".preview").style.color = "#ffffe5"; info_color = "#ffffe5";
			$(".preview").style.background = "#0a0a0a"; info_background = "#0a0a0a";
		} else if ($(".style-2 input[type='radio']:checked").id == "Blueonwhite") {
			$(".preview").style.color = "blue"; info_color = "blue";
			$(".preview").style.background = "#fff"; info_background = "#fff";
		} else if ($(".style-2 input[type='radio']:checked").id == "DarkbrownonLightgreen") {
			$(".preview").style.color = "#1e1e00"; info_color = "#1e1e00";
			$(".preview").style.background = "#b9b9b0"; info_background = "#b9b9b0";
		} else if ($(".style-2 input[type='radio']:checked").id == "BrownonDarkgreen") {
			$(".preview").style.color = "#282800"; info_color = "#282800";
			$(".preview").style.background = "#a0a000"; info_background = "#a0a000";
		} else if ($(".style-2 input[type='radio']:checked").id == "BlueonYellow") {
			$(".preview").style.color = "blue"; info_color = "blue";
			$(".preview").style.background = "yellow"; info_background = "yellow";
		}

		$(".preview").style.fontSize = $("#fontSizeRange").value + "px";
		$(".preview").style.letterSpacing = $("#letterSpaceRange").value + "px";
		$(".preview").style.wordSpacing = $("#wordSpaceRange").value + "px";

		info_fontSize = $("#fontSizeRange").value + "px";
		info_letterSpacing = $("#letterSpaceRange").value + "px";
		info_wordSpacing = $("#wordSpaceRange").value + "px";

	});
}

_($("#reset"), "click", function() {
	window.location.href = "customize.html";
});

_($("#submitForm"), "click", function() {
	chrome.storage.sync.set({
		myFontSize: info_fontSize,
		myLetterSpacing: info_letterSpacing,
		myWordSpacing: info_wordSpacing,
		myBackgroundColor: info_background,
		myColor: info_color
	});
});

_(document, "DOMContentLoaded", function() {
	chrome.storage.sync.get(function(items) {
		if (!items.myFontSize) {
			chrome.storage.sync.set({
				myFontSize: "18px",
				myLetterSpacing: "2px",
				myWordSpacing: "4px",
				myBackgroundColor: "#ff0",
				myColor: "#000"
			});
		} else {
			document.querySelector(".preview").style.fontSize = items.myFontSize;
			document.querySelector(".preview").style.letterSpacing = items.myLetterSpacing;
			document.querySelector(".preview").style.wordSpacing = items.myWordSpacing;
			document.querySelector(".preview").style.background = items.myBackgroundColor;
			document.querySelector(".preview").style.color = items.myColor;
		}
	});
});
	
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
var info_fontFamily = $(".preview").style.fontFamily;


var allInputs = document.querySelectorAll("input");
for (i = 0; i < allInputs.length; i++) {
	_(allInputs[i], "change", function() {

		if ($(".style-7 input[type='radio']:checked").id == "arialFont") {
			$(".preview").style.fontFamily = "'Helvetica Neue', 'Helvetica', Arial, sans-serif";
			info_fontFamily = "'Helvetica Neue', 'Helvetica', Arial, sans-serif";
		} else if($(".style-7 input[type='radio']:checked").id == "timesFont") {
			$(".preview").style.fontFamily = "'Georgia', 'Times New Roman', Times, serif";
			info_fontFamily = "'Georgia', 'Times New Roman', Times, serif";
		} else {
			$(".preview").style.fontFamily = "'Comic Sans MS', 'Comic Sans', cursive, sans-serif";
			info_fontFamily = "'Comic Sans MS', 'Comic Sans', cursive, sans-serif";
		}

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
			$(".preview").style.background = "#ff0"; info_background = "#ff0";
		}

		$(".preview").style.fontFamily = 
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
		myColor: info_color,
		myFontFamily: info_fontFamily
	});
	window.location.href = "#";
});

var bgcolor;

_(document, "DOMContentLoaded", function() {
	chrome.storage.sync.get(function(items) {
		if (!items.myFontSize) {
			chrome.storage.sync.set({
				myFontSize: "18px",
				myLetterSpacing: "2px",
				myWordSpacing: "4px",
				myBackgroundColor: "#ff0",
				myColor: "#000",
				myFontFamily: '"Helvetica Neue", "Helvetica", "Arial", sans-serif'
			});
		} else {
			document.querySelector(".preview").style.fontSize = items.myFontSize;
			document.querySelector(".preview").style.letterSpacing = items.myLetterSpacing;
			document.querySelector(".preview").style.wordSpacing = items.myWordSpacing;
			document.querySelector(".preview").style.background = items.myBackgroundColor;
			document.querySelector(".preview").style.color = items.myColor;
			document.querySelector(".preview").style.fontFamily = items.myFontFamily;
			if (items.myFontFamily == "'Comic Sans MS', 'Comic Sans', cursive, sans-serif") {
				$("#comicFont").checked = "true";
			} else if (items.myFontFamily == "'Georgia', 'Times New Roman', Times, serif") {
				$("#timesFont").checked = "true";
			} else {
				$("#arialFont").checked = "true";
			}
			var infors = $(".preview").getAttribute("style").split(";");
			for (i = 0; i < infors.length; i++) {
				if (infors[i].indexOf("font-size") > -1) {
					$("#fontSizeRange").value = parseInt(infors[i].replace("font-size:", ""));
				} else if (infors[i].indexOf("letter-spacing") > -1) {
					$("#letterSpaceRange").value = parseInt(infors[i].replace("letter-spacing:", ""));
				} else if (infors[i].indexOf("word-spacing") > -1) {
					$("#wordSpaceRange").value = parseInt(infors[i].replace("word-spacing:", ""));
				} else if (infors[i].indexOf("background") > -1) {
					if (infors[i].replace("background:", "").replace(/\s/g, "") == "rgb(255,255,0)") {
						bgcolor = "yellow";
					} else if (infors[i].replace("background:", "").replace(/\s/g, "") == "rgb(255,255,255)") {
						bgcolor = "white";
					} else if (infors[i].replace("background:", "").replace(/\s/g, "") == "rgb(250,250,200)") {
						bgcolor = "creme";
					} else if (infors[i].replace("background:", "").replace(/\s/g, "") == "rgb(10,10,10)") {
						bgcolor = "offblack";
					} else if (infors[i].replace("background:", "").replace(/\s/g, "") == "rgb(185,185,176)") {
						bgcolor = "lightgreen";
					} else if (infors[i].replace("background:", "").replace(/\s/g, "") == "rgb(160,160,0)") {
						bgcolor = "darkgreen";
					}
					console.log(bgcolor);
				} else if (infors[i].indexOf("color") > -1) {
					if (document.querySelector(".preview").style.background.replace(/\s/g, "") == "rgb(255,255,255)") {
						if (infors[i].replace("color:", "").replace(/\s/g, "").indexOf("0,0,0") > -1) {
							$("#BlackonWhite").checked = true;
						} else {
							$("#Blueonwhite").checked = true;
						}
					} else if (document.querySelector(".preview").style.background.replace(/\s/g, "") == "rgb(255,255,0)") {
						if (infors[i].replace("color:", "").replace(/\s/g, "").indexOf("0,0,0") > -1) {
							$("#Blackonyellow").checked = true;
						} else {
							$("#BlueonYellow").checked = true;
						}
					} else if (document.querySelector(".preview").style.background.replace(/\s/g, "") == "rgb(250,250,200)") {
						$("#BlackonCreme").checked = true;
					} else if (document.querySelector(".preview").style.background.replace(/\s/g, "") == "rgb(185,185,176)") {
						$("#DarkbrownonLightgreen").checked = true;
					} else if (document.querySelector(".preview").style.background.replace(/\s/g, "") == "rgb(10,10,10)") {
						$("#OffblackonOffwhite").checked = true;
					} else {
						$("#BrownonDarkgreen").checked = true;
					}
				}
			}
		}
	});
});
	
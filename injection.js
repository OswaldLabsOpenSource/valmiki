chrome.storage.sync.get({
	serviceStatus: ""
}, function(items) {
	if (items.serviceStatus == "start") {
		if (document.querySelectorAll("#oswaldSheet").length <= 0) {

				chrome.storage.sync.get(function(items) {

					var info_FontSize = items.myFontSize;
					var info_LetterSpacing = items.myLetterSpacing;
					var info_WordSpacing = items.myWordSpacing;
					var info_BackgroundColor = items.myBackgroundColor;
					var info_Color = items.myColor;
					var info_fontFamily = items.myFontFamily;

					var externalSheet = document.createElement("style");
					externalSheet.setAttribute("id", "oswaldSheet");
					externalSheet.setAttribute("type", "text/css");
					externalSheet.innerHTML = "code { background: yellow; color: black } address, article, aside, blockquote, canvas, cite, dd, div, dl, fieldset, figcaption, figure, figcaption, footer, form, h1, h2, h3, h4, h5, h6, header, hgroup, hr, li, main, nav, noscript, ol, output, p, pre, section, table, tfoot, ul, video, body { font-family: " + info_fontFamily + " !important; transition: 0.3s; background: " + info_BackgroundColor + " !important; color: " + info_Color + " !important; font-size: " + info_FontSize + " !important; letter-spacing: " + info_LetterSpacing + " !important; word-spacing: " + info_WordSpacing + " !important } h1, h2, h3, h4, h5, h6 { font-weight: bold !important; } h1 { font-size: 140% !important; } h2 { font-size: 125% !important; } h3 { font-size: 120% !important; } h4 { font-size: 115% !important; } h4 { font-size: 110% !important; } h6 { font-size: 105% !important; } a { font-weight: bold; color: inherit !important; } .readingMode { position: fixed; z-index: 999999; right: 20px; top: 20px; background: black; outline: none; border: none; color: white; font-size: 99%; padding: 10px 20px; border-radius: 5px; cursor: pointer; } i, em { font-style: normal !important; }";
					document.querySelector("head").appendChild(externalSheet);

				});

		}
	}
});
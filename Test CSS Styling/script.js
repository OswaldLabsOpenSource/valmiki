function changeFontSize() {
	var value = document.getElementById('slider').value;
	document.getElementById('status').innerHTML = value;
}

document.getElementById('status').addEventListener('click', changeFontSize);
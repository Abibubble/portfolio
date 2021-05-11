// Hover functions on nav items
function hover(id){
	document.getElementById(id).style.backgroundColor = "skyBlue";
}
function normal(id) {
	if (document.getElementById(id).classList.contains("active")) {
		document.getElementById(id).style.backgroundColor = "#996ccc";
	} else {
		document.getElementById(id).style.backgroundColor = "#c99de2";
	}
}
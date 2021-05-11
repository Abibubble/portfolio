// Hover functions on nav items
function hover(id){
	document.getElementById(id).style.backgroundColor = "skyBlue";
}
function normal(id) {
	if (document.getElementById(id).classList.contains("active")) {
		document.getElementById(id).style.backgroundColor = "#8c57c9";
	} else {
		document.getElementById(id).style.backgroundColor = "#af82c9";
	}
}

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu icon */
// function dropdownMenuToggle() {
//     let navbarContainer = document.getElementById("navbar-container");
//     if (navbarContainer.className === "nav") {
//         navbarContainer.className += " responsive";
//     } else {
//         navbarContainer.className = "nav";
//     }
// }
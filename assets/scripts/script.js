// Hover functions on nav items
function hover(id){
	document.getElementById(id).style.backgroundColor = "skyBlue";
}
function normal(id) {
	document.getElementById(id).style.backgroundColor = "white";
}

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu icon */
function dropdownMenuToggle() {
    let navbarContainer = document.getElementById("navbar-container");
    if (navbarContainer.className === "nav") {
        navbarContainer.className += " responsive";
    } else {
        navbarContainer.className = "nav";
    }
}
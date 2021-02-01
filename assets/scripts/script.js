function hover(id){
	document.getElementById(id).style.backgroundColor = "skyBlue";
}
function normal(id) {
	document.getElementById(id).style.backgroundColor = "white";
}

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function dropdownMenuToggle() {
    let navbarContainer = document.getElementById("navbar-container");
    if (navbarContainer.classList.contains("hide")) {
        navbarContainer.classList.remove("hide");
    } else {
        navbarContainer.classList.add("hide");
    }
}
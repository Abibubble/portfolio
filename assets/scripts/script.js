function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function onehover(){
	document.getElementById("skillone").style.fontSize = "200%";
}
function onenormal() {
	document.getElementById("skillone").style.fontSize = "100%";
}

function twohover(){
	document.getElementById("skilltwo").style.fontSize = "200%";
}
function twonormal() {
	document.getElementById("skilltwo").style.fontSize = "100%";
}

function threehover(){
	document.getElementById("skillthree").style.fontSize = "200%";
}
function threenormal() {
	document.getElementById("skillthree").style.fontSize = "100%";
}

function fourhover(){
	document.getElementById("skillfour").style.fontSize = "200%";
}
function fournormal() {
	document.getElementById("skillfour").style.fontSize = "100%";
}

function fivehover(){
	document.getElementById("skillfive").style.fontSize = "200%";
}
function fivenormal() {
	document.getElementById("skillfive").style.fontSize = "100%";
}

function sixhover(){
	document.getElementById("skillsix").style.fontSize = "200%";
}
function sixnormal() {
	document.getElementById("skillsix").style.fontSize = "100%";
}

function sevenhover(){
	document.getElementById("skillseven").style.fontSize = "200%";
}
function sevennormal() {
	document.getElementById("skillseven").style.fontSize = "100%";
}

function eighthover(){
	document.getElementById("skilleight").style.fontSize = "200%";
}
function eightnormal() {
	document.getElementById("skilleight").style.fontSize = "100%";
}

function ninehover(){
	document.getElementById("skillnine").style.fontSize = "200%";
}
function ninenormal() {
	document.getElementById("skillnine").style.fontSize = "100%";
}
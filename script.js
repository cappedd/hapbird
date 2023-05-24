var css = document.querySelector("h3");
var body = document.getElementById("gradient");
var button = document.querySelector(".button");

function setGradient() {
	var randomColor1 = Math.floor(Math.random()*16777215).toString(16);
	var randomColor2 = Math.floor(Math.random()*16777215).toString(16);
	body.style.background = "linear-gradient(to right, #" + randomColor1 + ", #" + randomColor2 + ")";
	css.textContent = randomColor1 + " background change yes " + randomColor2
}

button.addEventListener("click", setGradient);

var body = document.getElementById("gradient");
var button = document.querySelector(".button");

function changeGradient() {
	var randomColor1 = Math.floor(Math.random()*16777215).toString(16);
	var randomColor2 = Math.floor(Math.random()*16777215).toString(16);
	body.style.background = "linear-gradient(to right, #" + randomColor1 + ", #" + randomColor2 + ")";
}

button.addEventListener("click", changeGradient);

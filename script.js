color1 = document.getElementsByClassName("color1")[0];
color2 = document.getElementsByClassName("color2")[0];
body =document.getElementById("gradient");


function colorPick(){
	body.style.background = "linear-gradient(to right,"+color1.value + "," + color2.value + ")";
}
color1.addEventListener("input", colorPick)
color2.addEventListener("input", colorPick)
// Task 3. Changing Styles
const box = document.getElementById("box");
const colorBtn = document.getElementById("colorBtn");
const fontBtn = document.getElementById("fontBtn");

const colors = ["#ffffff", "#ffcccc", "#ccffcc", "#ccccff", "#ffffcc"];
let colorIndex = 0;

const fontSizes = [16, 20, 26, 32];
let fontIndex = 0;

colorBtn.addEventListener("click", function () {
	colorIndex = (colorIndex + 1) % colors.length;
	box.style.backgroundColor = colors[colorIndex];
});

fontBtn.addEventListener("click", function () {
	fontIndex = (fontIndex + 1) % fontSizes.length;
	box.style.fontSize = fontSizes[fontIndex] + "px";
});

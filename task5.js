// Task 5. Mouse Events
const hoverBox = document.getElementById("hoverBox");
const normalColor = "#dddddd";
const hoverColor = "#ffcc66";
hoverBox.addEventListener("mouseover", function () {
	hoverBox.style.backgroundColor = hoverColor;
});
hoverBox.addEventListener("mouseout", function () {
	hoverBox.style.backgroundColor = normalColor;
});

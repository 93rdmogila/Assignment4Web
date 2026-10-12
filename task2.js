// Task 2. Changing Content
const text = document.getElementById("text");
const changeBtn = document.getElementById("changeBtn");

changeBtn.addEventListener("click", function () {
	text.textContent = "The text has changed! JavaScript works.";
});

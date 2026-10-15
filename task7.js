// Task 7. Calculator
const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const result = document.getElementById("result");
function calculate(operation) {
	if (num1Input.value === "" || num2Input.value === "") {
		result.textContent = "Enter both numbers";
		return;
	}
	const a = Number(num1Input.value);
	const b = Number(num2Input.value);
	let answer;
	if (operation === "+") {
		answer = a + b;
	} else if (operation === "-") {
		answer = a - b;
	} else if (operation === "*") {
		answer = a * b;
	} else if (operation === "/") {
		if (b === 0) {
			result.textContent = "Cannot divide by zero";
			return;
		}
		answer = a / b;
	}
	result.textContent = answer;
}
document.getElementById("addBtn").addEventListener("click", function () {
	calculate("+");
});
document.getElementById("subBtn").addEventListener("click", function () {
	calculate("-");
});
document.getElementById("mulBtn").addEventListener("click", function () {
	calculate("*");
});
document.getElementById("divBtn").addEventListener("click", function () {
	calculate("/");
});

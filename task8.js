// Task 8. To-Do App
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const tasks = [];
function renderTasks() {
	taskList.innerHTML = "";
	tasks.forEach(function (task, index) {
		const li = document.createElement("li");
		const span = document.createElement("span");
		span.textContent = task.text;
		span.className = "task-text";
		if (task.done) {
			span.classList.add("done");
		}
		span.addEventListener("click", function () {
			tasks[index].done = !tasks[index].done;
			renderTasks();
		});
		const deleteBtn = document.createElement("button");
		deleteBtn.textContent = "Delete";
		deleteBtn.addEventListener("click", function () {
			tasks.splice(index, 1);
			renderTasks();
		});
		li.appendChild(span);
		li.appendChild(deleteBtn);
		taskList.appendChild(li);
	});
}
function addTask() {
	const text = taskInput.value.trim();
	if (text === "") {
		return;
	}
	tasks.push({ text: text, done: false });
	taskInput.value = "";
	taskInput.focus();
	renderTasks();
}
addTaskBtn.addEventListener("click", addTask);
taskInput.addEventListener("keydown", function (event) {
	if (event.key === "Enter") {
		addTask();
	}
});

// Task 4. Creating & Removing Elements
const addBtn = document.getElementById("addBtn");
const removeBtn = document.getElementById("removeBtn");
const itemList = document.getElementById("itemList");

addBtn.addEventListener("click", function () {
	const number = itemList.children.length + 1;
	const newItem = document.createElement("li");
	newItem.textContent = "Item " + number;
	itemList.appendChild(newItem);
});

removeBtn.addEventListener("click", function () {
	const lastItem = itemList.lastElementChild;
	if (lastItem !== null) {
		itemList.removeChild(lastItem);
	}
});

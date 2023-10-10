// Get references to DOM elements
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const addButton = document.getElementById("add-button"); // Added a reference to the "Add" button

// Add task when the "Add" button is clicked
addButton.addEventListener("click", addTask);

function addTask() {
    if (inputBox.value.trim() === '') { // Use trim() to remove leading/trailing spaces
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        inputBox.value = "";
        saveData();
    }
}

// Toggle task completion and remove tasks
listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
});

// Save and retrieve data from local storage
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    const savedData = localStorage.getItem("data");
    if (savedData) {
        listContainer.innerHTML = savedData;
    }
}

showTask();
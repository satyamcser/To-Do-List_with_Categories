// DOM Elements
const taskInput = document.getElementById("taskInput");
const categorySelect = document.getElementById("categorySelect");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();
    const category = categorySelect.value;

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // Create task element
    const taskItem = document.createElement("div");
    taskItem.classList.add("task-item", "bg-white", "shadow-sm");
    taskItem.innerHTML = `
        <div>
            <strong>${category}</strong>: ${taskText}
        </div>
        <div>
            <button class="btn btn-success btn-sm btn-complete">Complete</button>
            <button class="btn btn-danger btn-sm btn-delete">Delete</button>
        </div>
    `;

    // Add event listeners for complete and delete buttons
    const completeButton = taskItem.querySelector(".btn-complete");
    completeButton.addEventListener("click", () => {
        taskItem.classList.toggle("completed");
    });

    const deleteButton = taskItem.querySelector(".btn-delete");
    deleteButton.addEventListener("click", () => {
        taskList.removeChild(taskItem);
    });

    // Add task to the list
    taskList.appendChild(taskItem);

    // Clear the input field
    taskInput.value = "";
}

// Event listener for the Add Task button
addTaskButton.addEventListener("click", addTask);

// Add task on pressing Enter key
taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addTask();
    }
});
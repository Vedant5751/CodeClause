function addTask() {
    const taskInput = document.getElementById("task");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const taskList = document.getElementById("taskList");
        const newTask = document.createElement("li");
        newTask.innerHTML = `
            ${taskText}
            <button class="delete-button" onclick="deleteTask(this)">Delete</button>
        `;
        taskList.appendChild(newTask);
        taskInput.value = "";
    }
}

function deleteTask(button) {
    const taskList = document.getElementById("taskList");
    const taskItem = button.parentElement;
    taskList.removeChild(taskItem);
}

document.getElementById("task").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});

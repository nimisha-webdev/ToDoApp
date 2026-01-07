const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Load saved tasks
window.onload = loadTasks;

function addTask() {
  if (taskInput.value === "") {
    alert("Please enter a task");
    return;
  }

  const li = document.createElement("li");
  li.innerHTML = `
    <span onclick="toggleTask(this)">${taskInput.value}</span>
    <span class="delete" onclick="deleteTask(this)">❌</span>
  `;

  taskList.appendChild(li);
  saveTasks();
  taskInput.value = "";
}

function deleteTask(element) {
  element.parentElement.remove();
  saveTasks();
}

function toggleTask(element) {
  element.parentElement.classList.toggle("completed");
  saveTasks();
}

function saveTasks() {
  localStorage.setItem("tasks", taskList.innerHTML);
}

function loadTasks() {
  taskList.innerHTML = localStorage.getItem("tasks") || "";
}

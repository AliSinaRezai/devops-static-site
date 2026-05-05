const taskList = document.getElementById("taskList");

const defaultTasks = [
  "Complete DevOps assignment",
  "Study Git and Docker",
  "Review Terraform basics"
];

function loadDefaultTasks() {
  if (!taskList) return;

  defaultTasks.forEach(task => {
    createTask(task);
  });
}

function createTask(taskText) {
  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = taskText;

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.onclick = function () {
    li.remove();
  };

  li.appendChild(span);
  li.appendChild(removeBtn);
  taskList.appendChild(li);
}

function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  createTask(taskText);
  input.value = "";
}

loadDefaultTasks();
//Select DOM elements
const promptElem = document.getElementById("task-prompt");
const btnElement = document.querySelector("button");
const taskListElem = document.getElementById("task-list");

function AddTask() {
  //Check if there is something written in the prompt
  if (promptElem.value) {
    //Create new task element
    let newTask = document.createElement("div");
    newTask.classList.add("task");

    //Create user prompt text element
    let taskText = document.createElement("p");
    taskText.innerText = promptElem.value;

    //Add icons container
    let icons = document.createElement("div");
    icons.classList.add("icons");

    //Add icons container and prompt text to the new task
    newTask.appendChild(taskText);
    newTask.appendChild(icons);

    //Create icons elements
    let completeIcon = document.createElement('i');
    completeIcon.classList.add("bi", "bi-check-circle-fill", "completed-icon");
    completeIcon.addEventListener('click', MarkTaskComplete);

    let deleteIcon = document.createElement('i');
    deleteIcon.classList.add("bi", "bi-trash3-fill", "delete-icon");
    deleteIcon.addEventListener('click', DeleteTask);

    icons.append(completeIcon, deleteIcon);

    //Add task to the list
    taskListElem.appendChild(newTask);
    promptElem.value = "";
  }
  else {
    alert("Please write a task");
  }
}

function MarkTaskComplete(e) {
  let task = e.target.parentNode.parentNode;
  task.classList.toggle("completed-task");
}

function DeleteTask(e) {
  let deletedTask = e.target.parentNode.parentNode;
  deletedTask.remove();
}

btnElement.addEventListener('click', AddTask);

//Add task using Enter key
promptElem.addEventListener('keydown', (e) => {
  if (e.key === "Enter") {
    AddTask();
  }
});
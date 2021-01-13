var buttonEl = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function(){
    var taskitemEl = document.createElement("li");
    taskitemEl.textContent = "This is a new task.";
    taskitemEl.className = "task-item";
    tasksToDoEl.appendChild(taskitemEl);
}    

buttonEl.addEventListener("click", createTaskHandler);
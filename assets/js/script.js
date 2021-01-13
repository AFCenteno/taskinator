var tasksToDoEl = document.querySelector("#tasks-to-do");
var formEl = document.querySelector("#task-form")

var createTaskHandler = function(event){
    event.preventDefault();

    var taskitemEl = document.createElement("li");
    taskitemEl.textContent = "This is a new task.";
    taskitemEl.className = "task-item";
    tasksToDoEl.appendChild(taskitemEl);
}    

formEl.addEventListener("submit", createTaskHandler);
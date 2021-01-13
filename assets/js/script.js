var tasksToDoEl = document.querySelector("#tasks-to-do");
var formEl = document.querySelector("#task-form");

var createTaskHandler = function(event){
    event.preventDefault();
    var taskNameInput= document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value

    var taskitemEl = document.createElement("li");
    taskitemEl.className = "task-item";

    var taskInfoEl = document.createElement("div");
    taskInfoEl.className = "task-info";
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";

    taskitemEl.appendChild(taskInfoEl);

    tasksToDoEl.appendChild(taskitemEl);
}    

formEl.addEventListener("submit", createTaskHandler);
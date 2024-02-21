import { TaskUI } from "./script/class.js";
import { LS } from "./script/localStorage.js";
import { AddTask } from "./script/addTask.js";

const myData = new LS();
myData.getTasksFromLS();


const addTaskBtn = document.getElementById("addTask");
addTaskBtn.addEventListener("click", () => {
    const addTask = new AddTask();
    addTask.addTaskToMyTable();
});

const taskUI = new TaskUI();
document.getElementById("deleteAll").addEventListener("click", taskUI.deleteAll())

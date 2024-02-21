import { TaskUI } from "./class.js";
import { LS } from "./localStorage.js";

const myData = new LS();
myData.getTasksFromLS();

// export class AddTask {
//     constructor() {
//         // ריק כי אין צורך ב־event בפרמטרים
//     }
//         addTaskToMyTable() {
//             preventDefault(); // מניעת התנהגות ברירת המחדל של האירוע
//             console.log("something");

//         const detailsInput = document.getElementById("details");
//         const details = detailsInput.value;

//         const newTask = new TaskUI(details);
//         newTask.createTaskElement();

//         // איפוס ערכי הקלט
//         detailsInput.value = '';

//         // שמירת המשימה בזיכרון המקומי
//         myData.saveTask(details);
//     }
// }


export class AddTask {
    constructor() {
        // אין צורך בפרמטרים
    }

    addTaskToMyTable(event) {
        event.preventDefault(); // מניעת התנהגות ברירת המחדל של האירוע
        console.log("something");

        const detailsInput = document.getElementById("details");
        const details = detailsInput.value;

        const newTask = new TaskUI(details);
        newTask.createTaskElement();
    }
}